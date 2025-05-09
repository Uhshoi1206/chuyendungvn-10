
import { useMemo } from "react";
import { trucks } from "@/data/truckData";
import { BlogPost } from "@/models/BlogPost";
import { Truck } from "@/models/TruckTypes";

/**
 * Tìm chiếc xe liên quan nhất nếu bài viết blog có nhắc nổi bật tới model xe cụ thể nào đó.
 * Ưu tiên khớp tên/ngắn gọn/slug trong title, description, tags. 
 * Trả về thông tin sản phẩm hoặc null nếu không có.
 */
const useRelatedTruckForBlogPost = (post: BlogPost): Truck | null => {
  return useMemo(() => {
    if (!post) return null;

    // Xử lý tìm gần đúng tên xe xuất hiện ở đầu tiêu đề hoặc tag chứa slug
    const normalizedTitle = post.title.toLowerCase();
    const normalizedDesc = post.description.toLowerCase();
    const normalizedContent = post.content?.toLowerCase() || '';
    const tags = post.tags?.map(t => t.toLowerCase()) || [];

    // Tạo một số biến thể có thể xuất hiện trong bài viết
    const possibleTruckVariants: Record<string, string[]> = {
      'mighty-ex8-gtl-8-tan': ['ex8', 'mighty ex8', 'ex8 gtl', 'mighty ex8 gtl', '8 tấn', 'hyundai ex8', 'hyundai mighty ex8'],
      'hd72-3-5-tan': ['hd72', 'hyundai hd72', '3.5 tấn', '3.5t', 'hyundai 3.5 tấn'],
      'new-porter-h150-1-5-tan': ['porter', 'h150', 'porter h150', 'hyundai porter', '1.5 tấn', '1.5t', 'hyundai 1.5 tấn']
    };

    // Ưu tiên tìm kiếm chính xác theo tên đầy đủ và các biến thể phổ biến
    for (const truck of trucks) {
      const truckName = truck.name.toLowerCase();
      const truckSlug = truck.slug;
      const truckSlugWords = truckSlug.replace(/-/g, " ").toLowerCase();
      const slugParts = truckSlug.split('-');
      
      // Các từ khóa quan trọng để đánh trọng số cao hơn
      const keyTerms = [
        truckName,
        truckSlugWords,
        ...slugParts
      ];

      // Thêm các biến thể phổ biến của xe vào từ khóa tìm kiếm
      if (possibleTruckVariants[truckSlug]) {
        keyTerms.push(...possibleTruckVariants[truckSlug]);
      }

      // Tìm kiếm chính xác trong tiêu đề - ưu tiên cao nhất
      if (normalizedTitle.includes(truckName)) {
        return truck;
      }

      // Kiểm tra từng từ khóa trong các phần quan trọng của bài viết
      for (const term of keyTerms) {
        // Ưu tiên tìm trong tiêu đề
        if (normalizedTitle.includes(term)) {
          return truck;
        }
        
        // Tìm trong tags
        if (tags.some(tag => tag.includes(term))) {
          return truck;
        }
        
        // Tìm trong mô tả
        if (normalizedDesc.includes(term)) {
          return truck;
        }
        
        // Tìm trong nội dung (ưu tiên thấp hơn)
        if (normalizedContent.includes(term)) {
          return truck;
        }
      }

      // Kiểm tra đặc biệt cho các tên xe có thể bị chia cắt trong nội dung
      // Ví dụ: "Mighty" và "EX8" có thể xuất hiện riêng lẻ
      if (truckName.includes(' ')) {
        const nameParts = truckName.split(' ');
        let allPartsFound = true;
        
        for (const part of nameParts) {
          if (part.length < 2) continue; // Bỏ qua các phần quá ngắn
          
          if (!normalizedTitle.includes(part) && 
              !normalizedDesc.includes(part) && 
              !normalizedContent.includes(part)) {
            allPartsFound = false;
            break;
          }
        }
        
        if (allPartsFound) {
          return truck;
        }
      }
      
      // Kiểm tra số tấn trong tên xe và trong nội dung
      const weightMatch = truckName.match(/(\d+\.?\d*)\s*t[ấ|a]n/i);
      if (weightMatch) {
        const weight = weightMatch[1];
        const weightPattern = new RegExp(`${weight}\\s*t[ấ|a]n`, 'i');
        
        if (weightPattern.test(normalizedTitle) || 
            weightPattern.test(normalizedDesc) || 
            weightPattern.test(normalizedContent)) {
          return truck;
        }
      }
    }

    // Không tìm thấy xe phù hợp rõ ràng
    return null;
  }, [post]);
};

export default useRelatedTruckForBlogPost;
