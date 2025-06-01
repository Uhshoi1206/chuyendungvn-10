
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

    console.log(`Tìm sản phẩm liên quan cho bài viết: ${post.title}`);

    // Xử lý tìm gần đúng tên xe xuất hiện ở đầu tiêu đề hoặc tag chứa slug
    const normalizedTitle = post.title.toLowerCase();
    const normalizedDesc = post.description.toLowerCase();
    const normalizedContent = post.content?.toLowerCase() || '';
    const tags = post.tags?.map(t => t.toLowerCase()) || [];

    // Định nghĩa ánh xạ cụ thể cho từng bài viết dựa trên title hoặc category
    const specificMappings: Record<string, string> = {
      // Mapping dựa trên từ khóa trong tiêu đề
      'mighty': 'mighty-ex8-gtl-8-tan',
      'ex8': 'mighty-ex8-gtl-8-tan', 
      'hyundai ex8': 'mighty-ex8-gtl-8-tan',
      'porter': 'new-porter-h150-1-5-tan',
      'h150': 'new-porter-h150-1-5-tan',
      'hd72': 'hd72-3-5-tan',
      'hino': 'hino-xzu-7-5tan-thung-dong-lanh',
      'đông lạnh': 'hino-xzu-7-5tan-thung-dong-lanh',
      'dong lanh': 'hino-xzu-7-5tan-thung-dong-lanh',
      'bảo ôn': 'hyundai-h150-thung-bao-on',
      'bao on': 'hyundai-h150-thung-bao-on',
      'thùng kín': 'isuzu-qkr-thung-kin',
      'thung kin': 'isuzu-qkr-thung-kin',
      'thùng bạt': 'veam-vpt350-thung-bat',
      'thung bat': 'veam-vpt350-thung-bat',
      'thùng lửng': 'isuzu-vm-fx-thung-lung',
      'thung lung': 'isuzu-vm-fx-thung-lung',
      'xi téc': 'dongfeng-xi-tec-9-khoi',
      'xi tec': 'dongfeng-xi-tec-9-khoi',
      'xăng dầu': 'dongfeng-xi-tec-9-khoi',
      'xang dau': 'dongfeng-xi-tec-9-khoi',
      'tadano': 'tadano-tm-ze554mh',
      'kanglim': 'kanglim-ks1056',
      'cẩu': 'tadano-tm-ze554mh',
      'cau': 'tadano-tm-ze554mh',
      'mooc ben': 'doosung-3-truc-ben',
      'mooc sàn': 'cimc-3-truc-san',
      'mooc san': 'cimc-3-truc-san',
      'sàn rút': 'doosung-3-truc-san-rut',
      'san rut': 'doosung-3-truc-san-rut',
      'container': 'doosung-chuyên-chở-container',
      'cổ cò': 'doosung-co-co',
      'co co': 'doosung-co-co',
      'cổ ngỗng': 'doosung-co-co',
      'co ngong': 'doosung-co-co',
      'xương': 'doosung-xuong',
      'xuong': 'doosung-xuong',
      'lửng': 'cimc-lung',
      'lung': 'cimc-lung',
      'rào': 'cimc-rao',
      'rao': 'cimc-rao',
      'xi măng': 'cimc-bon-xi-mang',
      'xi mang': 'cimc-bon-xi-mang',
      'bụi sắt': 'doosung-bon-bui-sat',
      'bui sat': 'doosung-bon-bui-sat',
      'bột mì': 'cimc-bon-bot-mi',
      'bot mi': 'cimc-bon-bot-mi',
      'đầu kéo': 'hyundai-xcient-dau-keo',
      'dau keo': 'hyundai-xcient-dau-keo',
      'xcient': 'hyundai-xcient-dau-keo',
      'howo': 'howo-dau-keo',
      'giga': 'isuzu-giga-dau-keo'
    };

    // Tìm kiếm theo specific mappings trước
    for (const [keyword, truckSlug] of Object.entries(specificMappings)) {
      if (normalizedTitle.includes(keyword) || 
          normalizedDesc.includes(keyword) || 
          tags.some(tag => tag.includes(keyword))) {
        
        const foundTruck = trucks.find(truck => truck.slug === truckSlug);
        if (foundTruck) {
          console.log(`Tìm thấy sản phẩm theo keyword "${keyword}": ${foundTruck.name}`);
          return foundTruck;
        }
      }
    }

    // Fallback: tìm kiếm theo category và random selection để tránh trả về cùng 1 sản phẩm
    const categoryBasedTrucks = trucks.filter(truck => {
      if (post.category === 'product-review') {
        return truck.type === 'xe-tai';
      }
      if (post.category === 'driver-tips') {
        return truck.type === 'xe-tai' || truck.type === 'xe-cau';
      }
      if (post.category === 'maintenance') {
        return true; // Tất cả loại xe đều cần bảo dưỡng
      }
      if (post.category === 'buying-guide') {
        return truck.type === 'xe-tai';
      }
      if (post.category === 'technology') {
        return truck.type === 'dau-keo' || truck.type === 'mooc';
      }
      return truck.type === 'xe-tai'; // Default
    });

    if (categoryBasedTrucks.length > 0) {
      // Sử dụng hash của post ID để đảm bảo consistent nhưng khác nhau cho mỗi bài viết
      const hash = post.id.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0);
      
      const index = Math.abs(hash) % categoryBasedTrucks.length;
      const selectedTruck = categoryBasedTrucks[index];
      
      console.log(`Fallback: chọn sản phẩm theo category cho bài "${post.title}": ${selectedTruck.name}`);
      return selectedTruck;
    }

    console.log(`Không tìm thấy sản phẩm liên quan cho bài viết: ${post.title}`);
    return null;
  }, [post]);
};

export default useRelatedTruckForBlogPost;
