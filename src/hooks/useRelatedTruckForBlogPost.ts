
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
      // Xe tải
      'mighty-ex8-gtl-8-tan': ['ex8', 'mighty ex8', 'ex8 gtl', 'mighty ex8 gtl', '8 tấn', 'hyundai ex8', 'hyundai mighty ex8'],
      'hd72-3-5-tan': ['hd72', 'hyundai hd72', '3.5 tấn', '3.5t', 'hyundai 3.5 tấn'],
      'new-porter-h150-1-5-tan': ['porter', 'h150', 'porter h150', 'hyundai porter', '1.5 tấn', '1.5t', 'hyundai 1.5 tấn'],
      'hino-xzu-7-5tan-thung-dong-lanh': ['hino đông lạnh', 'xe đông lạnh', 'thùng đông lạnh', 'xe tải đông lạnh', 'hino xzu', 'xe 7.5 tấn đông lạnh'],
      'hyundai-h150-thung-bao-on': ['h150 bảo ôn', 'hyundai bảo ôn', 'thùng bảo ôn', 'xe tải bảo ôn', 'xe bảo ôn'],
      'isuzu-qkr-thung-kin': ['isuzu thùng kín', 'qkr thùng kín', 'xe thùng kín', 'xe tải thùng kín'],
      'veam-vpt350-thung-bat': ['veam thùng bạt', 'vpt350 thùng bạt', 'xe thùng bạt', 'xe tải thùng bạt'],
      'isuzu-vm-fx-thung-lung': ['isuzu thùng lửng', 'vm fx thùng lửng', 'xe thùng lửng', 'xe tải thùng lửng'],
      'dongfeng-xi-tec-9-khoi': ['dongfeng xi téc', 'xe xi téc', 'xe chở xăng dầu', 'xi téc 9 khối'],
      
      // Xe cẩu
      'tadano-tm-ze554mh': ['cẩu tadano', 'tadano 5 tấn', 'cẩu 5 tấn', 'xe cẩu tadano'],
      'kanglim-ks1056': ['cẩu kanglim', 'kanglim 5 tấn', 'cẩu 5 tấn kanglim', 'xe cẩu kanglim'],
      'hino-fc9jlsw-gan-cau-unic': ['hino gắn cẩu', 'xe hino gắn cẩu', 'hino fc gắn cẩu', 'xe tải gắn cẩu'],
      
      // Sơ mi rơ mooc
      'doosung-3-truc-ben': ['mooc ben doosung', 'sơ mi rơ mooc ben', 'mooc ben 3 trục', 'mooc ben'],
      'cimc-3-truc-san': ['mooc sàn cimc', 'sơ mi rơ mooc sàn', 'mooc sàn 3 trục', 'mooc sàn'],
      'doosung-3-truc-san-rut': ['mooc sàn rút dài', 'mooc rút dài', 'sơ mi rơ mooc sàn rút', 'mooc sàn rút'],
      'doosung-chuyên-chở-container': ['mooc lùn', 'chở container', 'sơ mi rơ mooc container', 'mooc container'],
      'doosung-co-co': ['mooc cổ cò', 'sơ mi rơ mooc cổ cò', 'mooc cổ ngỗng'],
      'doosung-xuong': ['mooc xương', 'sơ mi rơ mooc xương', 'mooc khung'],
      'cimc-lung': ['mooc lửng', 'sơ mi rơ mooc lửng', 'mooc trần'],
      'cimc-rao': ['mooc rào', 'sơ mi rơ mooc rào', 'mooc có rào chắn'],
      'doosung-xitec-xang-dau': ['mooc xi téc', 'mooc chở xăng dầu', 'sơ mi rơ mooc xi téc'],
      'cimc-bon-xi-mang': ['mooc bồn xi măng', 'mooc chở xi măng rời', 'sơ mi rơ mooc xi măng'],
      'doosung-bon-bui-sat': ['mooc bồn bụi sắt', 'mooc chở bụi sắt', 'sơ mi rơ mooc bụi sắt'],
      'cimc-bon-bot-mi': ['mooc bồn bột mì', 'mooc chở bột mì', 'sơ mi rơ mooc bột mì'],
      
      // Xe đầu kéo
      'hyundai-xcient-dau-keo': ['hyundai đầu kéo', 'đầu kéo xcient', 'đầu kéo hyundai'],
      'howo-dau-keo': ['howo đầu kéo', 'đầu kéo howo', 'đầu kéo trung quốc'],
      'isuzu-giga-dau-keo': ['isuzu đầu kéo', 'đầu kéo isuzu', 'đầu kéo giga', 'giga đầu kéo']
    };

    // Ưu tiên tìm kiếm chính xác theo tên đầy đủ và các biến thể phổ biến
    for (const truck of trucks) {
      const truckName = truck.name.toLowerCase();
      const truckSlug = truck.slug;
      const truckSlugWords = truckSlug.replace(/-/g, " ").toLowerCase();
      const slugParts = truckSlug.split('-');
      const boxType = truck.boxType ? truck.boxType.toLowerCase() : '';
      const trailerType = truck.trailerType ? truck.trailerType.toLowerCase() : '';
      
      // Các từ khóa quan trọng để đánh trọng số cao hơn
      const keyTerms = [
        truckName,
        truckSlugWords,
        ...slugParts
      ];

      // Thêm từ khóa chuyên biệt theo loại xe
      if (truck.type === 'xe-tai' && truck.boxType) {
        keyTerms.push(`thùng ${boxType}`);
        keyTerms.push(`xe ${boxType}`);
        keyTerms.push(`xe tải ${boxType}`);
      }
      
      if (truck.type === 'mooc' && truck.trailerType) {
        keyTerms.push(`mooc ${trailerType}`);
        keyTerms.push(`sơ mi rơ mooc ${trailerType}`);
      }
      
      // Thêm các biến thể phổ biến của xe vào từ khóa tìm kiếm
      if (possibleTruckVariants[truckSlug]) {
        keyTerms.push(...possibleTruckVariants[truckSlug]);
      }

      // Tìm kiếm chính xác trong tiêu đề - ưu tiên cao nhất
      if (normalizedTitle.includes(truckName)) {
        return truck;
      }
      
      // Tìm kiếm biến thể loại thùng xe trong tiêu đề
      if (truck.boxType && normalizedTitle.includes(truck.boxType.toLowerCase())) {
        return truck;
      }
      
      // Tìm kiếm biến thể loại mooc trong tiêu đề
      if (truck.trailerType && normalizedTitle.includes(truck.trailerType.toLowerCase())) {
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
      
      // Kiểm tra khả năng đề cập đến "thùng đông lạnh", "thùng bảo ôn", v.v.
      if (truck.boxType) {
        const boxTypeTerms = [`thùng ${truck.boxType}`, `xe tải ${truck.boxType}`, `xe ${truck.boxType}`];
        for (const term of boxTypeTerms) {
          if (normalizedTitle.includes(term) || normalizedDesc.includes(term) || tags.some(tag => tag.includes(term))) {
            return truck;
          }
        }
      }
      
      // Kiểm tra khả năng đề cập đến loại mooc
      if (truck.trailerType) {
        const trailerTerms = [`mooc ${truck.trailerType}`, `sơ mi rơ mooc ${truck.trailerType}`];
        for (const term of trailerTerms) {
          if (normalizedTitle.includes(term) || normalizedDesc.includes(term) || tags.some(tag => tag.includes(term))) {
            return truck;
          }
        }
      }
    }

    // Không tìm thấy xe phù hợp rõ ràng
    return null;
  }, [post]);
};

export default useRelatedTruckForBlogPost;
