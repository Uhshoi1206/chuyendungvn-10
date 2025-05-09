
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
    // Xử lý tìm gần đúng tên xe xuất hiện ở đầu tiêu đề hoặc tag chứa slug
    const normalizedTitle = post.title.toLowerCase();
    const normalizedDesc = post.description.toLowerCase();
    const normalizedContent = post.content?.toLowerCase() || '';
    const tags = post.tags?.map(t => t.toLowerCase()) || [];

    // Ưu tiên khớp theo slug xe nằm ở tiêu đề hoặc tag
    for (const truck of trucks) {
      const truckName = truck.name.toLowerCase();
      const truckSlug = truck.slug;
      const truckSlugWords = truckSlug.replace(/-/g, " ").toLowerCase();

      // Kiểm tra tên xe đứng đầu tiêu đề hoặc xuất hiện đầy đủ trong title
      if (
        normalizedTitle.startsWith(truckName) ||
        normalizedTitle.includes(truckName)
      ) {
        return truck;
      }

      // Kiểm tra từ khóa slug xuất hiện trong tag/tên bài
      if (
        normalizedTitle.includes(truckSlugWords) ||
        tags.some(tag => tag.includes(truckSlugWords)) ||
        tags.some(tag => tag.includes(truckName))
      ) {
        return truck;
      }

      // Kiểm tra trong mô tả
      if (
        normalizedDesc.includes(truckName) ||
        normalizedDesc.includes(truckSlugWords)
      ) {
        return truck;
      }
      
      // Kiểm tra trong nội dung bài viết
      if (
        normalizedContent.includes(truckName) ||
        normalizedContent.includes(truckSlugWords)
      ) {
        return truck;
      }
    }

    // Không tìm thấy xe phù hợp rõ ràng
    return null;
  }, [post]);
};

export default useRelatedTruckForBlogPost;
