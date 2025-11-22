
import { BrandType, Product, Project, Testimonial, Category, BlogPost } from './types';

export const COMPANY_INFO = {
  name: 'VNGPOWER',
  hotline: '0901 38 9998',
  zalo: '0901 38 9998',
  email: 'contact@vngpower.com',
  address: 'SAV4 – 0328, 0329, 28 Mai Chí Thọ, P. Bình Trưng, TP. HCM',
  taxCode: '0104975057',
  officeHCM: 'SAV4 – 0328, 0329, 28 Mai Chí Thọ, Phường Bình Trưng, Tp Hồ Chí Minh',
  officeHN: 'Căn 3202 Toà nhà A2 KĐT An Bình City, Số 232 Phạm Văn Đồng, Phường Phú Diễn, Hà Nội',
  factory: 'Số 42 đường Liên Mạc, Phường Thượng Cát, Thành Phố Hà Nội'
};

// --- DANH SÁCH CÔNG SUẤT ĐẦY ĐỦ ---
export const CAPACITY_LIST = [
  30, 40, 50, 60, 70, 80, 90, 100, 110, 125, 150, 165, 200, 220, 250, 275, 300, 350, 
  400, 440, 450, 500, 550, 600, 650, 700, 750, 800, 900, 1000, 1250, 1400, 1500, 
  1650, 1800, 2000, 2250, 2500
];

// --- HÌNH ẢNH SẢN PHẨM ---
const IMG_PROD_1 = 'https://mayphatdienvietnhat.vn/wp-content/uploads/2025/11/3.png';
const IMG_PROD_2 = 'https://mayphatdienvietnhat.vn/wp-content/uploads/2025/11/7.png';
const IMG_PROD_3 = 'https://mayphatdienvietnhat.vn/wp-content/uploads/2025/11/9.png';
const IMG_PROD_4 = 'https://mayphatdienvietnhat.vn/wp-content/uploads/2025/11/8.png';

const IMG_CUMMINS = IMG_PROD_1;
const IMG_HYUNDAI = IMG_PROD_2;
const IMG_MITSUBISHI = IMG_PROD_3;
const IMG_ISUZU = IMG_PROD_4;
const IMG_BAUDOUIN = IMG_PROD_1;
const IMG_KOKURO = IMG_PROD_2;

// --- HÌNH ẢNH DỰ ÁN ---
const PROJECT_IMG_HOSPITAL = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop'; 
const PROJECT_IMG_FACTORY = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop';
const PROJECT_IMG_RESORT = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop';
const PROJECT_IMG_BUILDING = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
const PROJECT_IMG_DATACENTER = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop';
const PROJECT_IMG_COLD_STORAGE = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop';

// --- HÌNH ẢNH DANH MỤC ---
const CAT_IMG_COMMON = 'https://mayphatdienvietnhat.vn/wp-content/uploads/2025/11/8.png';

const CAT_IMG_CUMMINS = CAT_IMG_COMMON;
const CAT_IMG_HYUNDAI = CAT_IMG_COMMON;
const CAT_IMG_KOKURO = CAT_IMG_COMMON;
const CAT_IMG_ISUZU = CAT_IMG_COMMON;
const CAT_IMG_MITSUBISHI = CAT_IMG_COMMON;
const CAT_IMG_BAUDOUIN = CAT_IMG_COMMON;

// --- NỘI DUNG CHI TIẾT SẢN PHẨM (HTML) ---
const DESC_CUMMINS = `
<div class="space-y-4">
  <p><strong>Máy phát điện VNGPOWER sử dụng động cơ Cummins</strong> là giải pháp nguồn điện dự phòng hàng đầu hiện nay, được lắp ráp trực tiếp tại nhà máy VNGPOWER theo tiêu chuẩn ISO 9001:2015.</p>
  
  <h3 class="text-xl font-bold text-navy-900">Ưu điểm nổi bật:</h3>
  <ul class="list-disc pl-5 space-y-2">
    <li><strong>Động cơ Cummins (USA Technology):</strong> Nổi tiếng toàn cầu về độ bền, khả năng chịu tải biến thiên (Step load) cực tốt, phù hợp cho các công trình có tải thay đổi liên tục như thang máy, bơm nước.</li>
    <li><strong>Đầu phát điện Stamford/Leroy Somer:</strong> Sử dụng bộ điều chỉnh điện áp tự động AVR giúp điện áp đầu ra luôn ổn định ở mức ±1%, an toàn tuyệt đối cho thiết bị điện tử nhạy cảm.</li>
    <li><strong>Vỏ cách âm VNGPOWER:</strong> Được sản xuất đồng bộ tại Việt Nam với thép dày 2mm sơn tĩnh điện. Hệ thống tiêu âm bằng bông khoáng Rockwool tỷ trọng cao và vải chống cháy, đảm bảo độ ồn đạt chuẩn khu dân cư (< 70dB tại 7m).</li>
  </ul>

  <h3 class="text-xl font-bold text-navy-900">Cấu hình tiêu chuẩn:</h3>
  <ul class="list-disc pl-5 space-y-2">
    <li>Bảng điều khiển: Deepsea (UK) hoặc ComAp (EU) hiển thị đa ngôn ngữ (có Tiếng Việt).</li>
    <li>Bình nhiên liệu: Tích hợp dưới chân máy (đủ vận hành 8 giờ).</li>
    <li>Phụ kiện đi kèm: Ắc quy khởi động, Bộ sạc tự động, Pô giảm thanh, Dầu nhớt & Nước làm mát (đã châm sẵn).</li>
  </ul>
  
  <p class="italic text-gray-600 bg-gray-100 p-3 rounded">Sản phẩm được VNGPOWER bảo hành chính hãng 24 tháng hoặc 2000 giờ chạy máy trên toàn quốc.</p>
</div>
`;

const DESC_MITSUBISHI = `
<div class="space-y-4">
  <p><strong>Tổ máy phát điện VNGPOWER Powered by Mitsubishi</strong> mang trong mình sức mạnh công nghiệp Nhật Bản. Đây là sự lựa chọn số 1 cho các nhà máy sản xuất, khu công nghiệp nặng và các tòa nhà dữ liệu (Data Center).</p>
  
  <h3 class="text-xl font-bold text-navy-900">Tại sao chọn động cơ Mitsubishi?</h3>
  <ul class="list-disc pl-5 space-y-2">
    <li><strong>Độ bền "Nồi đồng cối đá":</strong> Động cơ Mitsubishi Heavy Industries được thiết kế để hoạt động liên tục (Continuous) trong môi trường khắc nghiệt nhất. Tuổi thọ đại tu có thể lên tới 20.000 giờ.</li>
    <li><strong>Siêu tiết kiệm nhiên liệu:</strong> Công nghệ phun nhiên liệu chính xác giúp tiết kiệm 10-15% chi phí vận hành so với các dòng động cơ cùng phân khúc.</li>
    <li><strong>Vận hành êm ái:</strong> Nhờ thiết kế khối động cơ vững chắc và hệ thống cân bằng động tốt, máy rung động rất ít khi hoạt động.</li>
  </ul>

  <h3 class="text-xl font-bold text-navy-900">Tiêu chuẩn lắp ráp VNGPOWER:</h3>
  <p>Tổ máy được VNGPOWER lắp ráp trên hệ thống khung bệ (Chassis) thép chấn dập chịu lực cao, tích hợp lò xo giảm chấn chuyên dụng giúp triệt tiêu 99% rung động xuống sàn.</p>
  
  <p class="italic text-gray-600 bg-gray-100 p-3 rounded">Cam kết phụ tùng thay thế chính hãng có sẵn tại kho VNGPOWER trong vòng 15 năm.</p>
</div>
`;

const DESC_HYUNDAI = `
<div class="space-y-4">
  <p><strong>Máy phát điện VNGPOWER sử dụng động cơ Hyundai (Hàn Quốc)</strong> là dòng sản phẩm cân bằng hoàn hảo giữa CHẤT LƯỢNG và GIÁ THÀNH. </p>
  
  <h3 class="text-xl font-bold text-navy-900">Đặc điểm kỹ thuật:</h3>
  <ul class="list-disc pl-5 space-y-2">
    <li><strong>Động cơ Hyundai:</strong> Vận hành mạnh mẽ, ít hỏng vặt và đặc biệt là chi phí bảo trì, thay thế linh kiện rất rẻ.</li>
    <li><strong>Thẩm mỹ cao:</strong> Tổ máy được thiết kế gọn gàng, vỏ cách âm được sơn tĩnh điện ngoài trời chống ăn mòn, phù hợp đặt tại các tòa nhà văn phòng, khách sạn.</li>
    <li><strong>Dễ sử dụng:</strong> Bảng điều khiển thông minh, tự động khởi động khi mất điện và tắt máy khi có điện lại (khi kết hợp với tủ ATS).</li>
  </ul>

  <h3 class="text-xl font-bold text-navy-900">Ứng dụng:</h3>
  <p>Phù hợp nhất cho: Trường học, Bệnh viện tư nhân, Khách sạn, Trang trại chăn nuôi, Biệt thự...</p>
</div>
`;

const DESC_GENERIC = `
<div class="space-y-4">
  <p>Sản phẩm máy phát điện công nghiệp được <strong>VNGPOWER</strong> lắp ráp và hoàn thiện tại Việt Nam, đáp ứng nghiêm ngặt các tiêu chuẩn về khí thải và độ ồn theo TCVN.</p>
  <p>Chúng tôi cam kết:</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>Máy mới 100%, đầy đủ CO/CQ (Chứng nhận xuất xứ/Chất lượng) cho động cơ và đầu phát.</li>
    <li>Thử tải 100% tại nhà máy trước khi xuất xưởng.</li>
    <li>Hỗ trợ vận chuyển và lắp đặt tận nơi trên toàn quốc.</li>
  </ul>
</div>
`;

// --- NỘI DUNG CHI TIẾT DỰ ÁN (HTML) ---
const PROJECT_DESC_HOSPITAL = `
<div class="space-y-4">
  <p><strong>Bệnh viện Chợ Rẫy</strong> là bệnh viện tuyến cuối hạng đặc biệt trực thuộc Bộ Y tế, nơi tiếp nhận những ca bệnh nặng nhất từ các tỉnh phía Nam. Do đó, yêu cầu về nguồn điện dự phòng tại đây là cực kỳ nghiêm ngặt, đảm bảo "Zero Downtime" cho khu Hồi sức tích cực (ICU) và 30 phòng mổ tiêu chuẩn quốc tế.</p>
  <p>VNGPOWER đã vinh dự vượt qua nhiều nhà thầu quốc tế để trúng thầu gói cung cấp và lắp đặt hệ thống nguồn điện dự phòng công suất lớn này.</p>
  
  <h3 class="text-xl font-bold text-navy-900">Phạm vi cung cấp:</h3>
  <ul class="list-disc pl-5 space-y-2">
    <li><strong>03 Tổ máy phát điện Cummins (USA) 1500kVA</strong>.</li>
    <li>Hệ thống tủ hòa đồng bộ (Synchronization) sử dụng bộ điều khiển ComAp (Châu Âu).</li>
    <li>Hệ thống bồn dầu ngầm 20.000 lít và hệ thống bơm dầu tự động.</li>
    <li>Hệ thống tiêu âm phòng máy đạt chuẩn bệnh viện (< 70dB).</li>
  </ul>

  <h3 class="text-xl font-bold text-navy-900">Quy trình triển khai:</h3>
  <p>Việc thi công được thực hiện dưới tầng hầm B2 trong khi bệnh viện vẫn đang hoạt động. Đội ngũ kỹ sư VNGPOWER đã phải tính toán phương án tháo rời từng bộ phận máy để đưa xuống hầm qua lối đi hẹp, sau đó lắp ráp và hiệu chỉnh lại chính xác 100%. Hệ thống đã được bàn giao và đưa vào vận hành ổn định từ năm 2023.</p>
</div>
`;

const PROJECT_DESC_SAMSUNG = `
<div class="space-y-4">
  <p><strong>Nhà máy Samsung Electronics Việt Nam Thái Nguyên (SEVT)</strong> là cứ điểm sản xuất điện thoại lớn nhất thế giới của Samsung. Bất kỳ sự cố mất điện nào dù chỉ vài giây cũng có thể gây thiệt hại hàng triệu USD do hư hỏng dây chuyền sản xuất chip bán dẫn.</p>
  
  <h3 class="text-xl font-bold text-navy-900">Giải pháp của VNGPOWER:</h3>
  <p>Chúng tôi cung cấp giải pháp nguồn điện dự phòng "Tier 3" với độ sẵn sàng 99.99%.</p>
  <ul class="list-disc pl-5 space-y-2">
    <li><strong>Sản phẩm:</strong> 02 Máy phát điện Mitsubishi 2000kVA (Nhập khẩu nguyên chiếc từ Nhật Bản).</li>
    <li><strong>Động cơ:</strong> Mitsubishi S16R-PTA - Dòng động cơ hạng nặng chịu tải liên tục (Continuous Duty).</li>
    <li><strong>Thử tải:</strong> Hệ thống đã vượt qua bài kiểm tra thử tải giả (Loadbank) 110% công suất liên tục trong 8 giờ dưới sự giám sát của chuyên gia Samsung Hàn Quốc.</li>
  </ul>
  
  <p>Dự án khẳng định năng lực của VNGPOWER trong việc đáp ứng các tiêu chuẩn khắt khe nhất của các tập đoàn đa quốc gia.</p>
</div>
`;

const PROJECT_DESC_RESORT = `
<div class="space-y-4">
  <p>Quần thể <strong>Vinpearl Nha Trang</strong> nằm trên đảo Hòn Tre là khu du lịch nghỉ dưỡng biển đảo hàng đầu Việt Nam. Đặc thù của dự án là môi trường biển có độ mặn cao, gió lớn và yêu cầu vận chuyển thiết bị ra đảo phức tạp.</p>
  
  <h3 class="text-xl font-bold text-navy-900">Thách thức & Giải pháp:</h3>
  <ul class="list-disc pl-5 space-y-2">
    <li><strong>Chống ăn mòn:</strong> Toàn bộ vỏ máy phát điện được VNGPOWER sơn phủ 3 lớp Epoxy chuyên dụng cho tàu biển, đảm bảo không bị rỉ sét trong 10 năm.</li>
    <li><strong>Động cơ Baudouin:</strong> Lựa chọn dòng động cơ Baudouin (Pháp) vốn có nguồn gốc từ động cơ tàu thủy, hoạt động cực kỳ bền bỉ trong môi trường độ ẩm cao.</li>
    <li><strong>Vận chuyển:</strong> Sử dụng sà lan chuyên dụng để đưa 5 tổ máy 500kVA ra đảo và dùng cẩu bánh xích đưa lên vị trí lắp đặt trên đồi.</li>
  </ul>
</div>
`;

const PROJECT_DESC_LANDMARK = `
<div class="space-y-4">
  <p><strong>Landmark 81</strong> - Tòa nhà cao nhất Việt Nam, biểu tượng của sự thịnh vượng. Hệ thống cơ điện (M&E) tại đây được thiết kế theo tiêu chuẩn cao cấp nhất thế giới.</p>
  
  <h3 class="text-xl font-bold text-navy-900">Hạng mục triển khai:</h3>
  <p>VNGPOWER chịu trách nhiệm cung cấp hệ thống nguồn điện dự phòng cho khối đế thương mại và hệ thống PCCC của tòa nhà.</p>
  <ul class="list-disc pl-5 space-y-2">
    <li><strong>Công suất:</strong> 4 x 2500kVA Cummins (Tổng công suất 10MVA).</li>
    <li><strong>Hệ thống thoát khói:</strong> Đây là bài toán khó nhất. VNGPOWER đã lắp đặt hệ thống xử lý khí thải DPF (Diesel Particulate Filter) ngay tại phòng máy, giúp khí thải ra môi trường đạt chuẩn Euro 5, không cần ống khói dẫn lên mái tòa nhà (cao 460m).</li>
  </ul>
</div>
`;

const PROJECT_DESC_DATACENTER = `
<div class="space-y-4">
  <p><strong>Viettel IDC Hòa Lạc</strong> là trung tâm dữ liệu lớn nhất miền Bắc, đạt chuẩn Tier 3 TIA-942. Nguồn điện tại đây được coi là "trái tim" sống còn của cả hệ thống.</p>
  
  <h3 class="text-xl font-bold text-navy-900">Hệ thống điện dự phòng N+1:</h3>
  <p>VNGPOWER đã thiết kế và lắp đặt hệ thống 10 máy phát điện Mitsubishi 2000kVA hoạt động theo cơ chế dự phòng N+1 (luôn có 1 máy nghỉ luân phiên).</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>Khởi động và hòa đồng bộ 10 máy chỉ trong vòng 15 giây.</li>
    <li>Hệ thống giám sát SCADA cho phép kỹ sư theo dõi nhiệt độ, áp suất, mức nhiên liệu từ xa qua màn hình trung tâm.</li>
    <li>Hệ thống bồn dầu trung tâm 50.000 lít đảm bảo Data Center vận hành liên tục 72 giờ không cần tiếp nhiên liệu.</li>
  </ul>
</div>
`;

const PROJECT_DESC_SEAFOOD = `
<div class="space-y-4">
  <p><strong>Tập đoàn Minh Phú</strong> là "Vua tôm" của Việt Nam. Tại nhà máy chế biến Cà Mau, kho lạnh bảo quản hàng nghìn tấn tôm xuất khẩu yêu cầu nguồn điện 24/7. Chỉ cần mất điện 1 giờ, nhiệt độ kho tăng lên sẽ làm hỏng chất lượng sản phẩm.</p>
  
  <h3 class="text-xl font-bold text-navy-900">Triển khai trên nền đất yếu:</h3>
  <p>Do địa chất miền Tây rất yếu, VNGPOWER đã thiết kế hệ thống bệ máy bê tông cốt thép đặc biệt nằm trên hệ cọc nhồi sâu 30m. Đồng thời sử dụng lò xo giảm chấn lò xo (Spring Isolator) giúp triệt tiêu 99% rung động, không gây nứt gãy sàn bê tông.</p>
</div>
`;

// ORDER: KOKURO -> CUMMINS -> HYUNDAI -> MITSUBISHI -> ISUZU -> BAUDOUIN
export const CATEGORIES: Category[] = [
  {
    id: 'Kokuro',
    name: 'KR Series - Powered By KOKURO',
    origin: 'Nhật Bản / Lắp ráp VN',
    desc: 'Siêu tiết kiệm nhiên liệu, vỏ siêu cách âm VNGPOWER.',
    longDesc: 'Sự kết hợp hoàn hảo giữa động cơ Kokuro (Công nghệ Nhật Bản) tiết kiệm nhiên liệu và vỏ cách âm siêu êm do VNGPOWER sản xuất. Đây là dòng máy "Best Seller" cho phân khúc biệt thự và văn phòng nhỏ.',
    range: '20kVA - 125kVA',
    image: CAT_IMG_KOKURO,
    technicalSpecs: [
      { label: 'Động cơ', value: 'Kokuro (Japan Tech)' },
      { label: 'Lắp ráp', value: 'VNGPOWER OEM' },
      { label: 'Đầu phát', value: 'Stamford / Mecc Alte' },
      { label: 'Vỏ chống ồn', value: 'VNGPOWER Whisper' },
      { label: 'Độ ồn', value: '< 65 dB(A) @ 7m' },
      { label: 'Chứng nhận', value: 'Xuất xưởng VNGPOWER' }
    ]
  },
  {
    id: 'Cummins',
    name: 'CS Series - Powered By CUMMINS',
    origin: 'Mỹ / Lắp ráp VN',
    desc: 'Tổ máy lắp ráp tại nhà máy VNGPOWER sử dụng động cơ Cummins chính hãng.',
    longDesc: 'Dòng máy phát điện CS Series (Powered By Cummins) được lắp ráp trực tiếp tại nhà máy của chúng tôi theo tiêu chuẩn ISO 9001:2015. Chúng tôi sử dụng động cơ Cummins (USA/India/China) nhập khẩu chính hãng, kết hợp với đầu phát Stamford và vỏ cách âm do VNGPOWER sản xuất, mang lại giá thành tối ưu nhưng chất lượng tương đương máy nhập nguyên chiếc.',
    range: '25kVA - 2500kVA',
    image: CAT_IMG_CUMMINS,
    technicalSpecs: [
      { label: 'Động cơ', value: 'Cummins (Chính hãng)' },
      { label: 'Lắp ráp tại', value: 'Nhà máy VNGPOWER (Việt Nam)' },
      { label: 'Vỏ cách âm', value: 'VNGPOWER sản xuất (Thép dày 2mm)' },
      { label: 'Đầu phát', value: 'Stamford (UK)' },
      { label: 'Bảng điều khiển', value: 'Deepsea / ComAp' },
      { label: 'Bảo hành', value: '24 tháng chính hãng' }
    ]
  },
  {
    id: 'Hyundai',
    name: 'HS Series - Powered By HYUNDAI',
    origin: 'Hàn Quốc / Lắp ráp VN',
    desc: 'Động cơ Hyundai nhập khẩu, VNGPOWER lắp ráp đồng bộ.',
    longDesc: 'Dòng máy sử dụng động cơ Hyundai (Hàn Quốc) nổi tiếng về sự êm ái và tiết kiệm nhiên liệu. Đội ngũ kỹ sư VNGPOWER đã tối ưu hóa hệ thống thoát khí và vỏ cách âm để đảm bảo máy hoạt động êm hơn cả tiêu chuẩn của hãng, phù hợp cho khu dân cư và khách sạn.',
    range: '10kVA - 500kVA',
    image: CAT_IMG_HYUNDAI,
    technicalSpecs: [
      { label: 'Động cơ', value: 'Hyundai (Korea)' },
      { label: 'Lắp ráp', value: 'VNGPOWER OEM' },
      { label: 'Đầu phát', value: 'Hyundai / Mecc Alte' },
      { label: 'Vỏ chống ồn', value: 'VNGPOWER Super Silent' },
      { label: 'Tiêu chuẩn', value: 'ISO 9001-2015' },
      { label: 'Giá thành', value: 'Tiết kiệm 30% so với nhập khẩu' }
    ]
  },
  {
    id: 'Mitsubishi',
    name: 'MS Series - Powered By MITSUBISHI',
    origin: 'Nhật Bản / Lắp ráp VN',
    desc: 'Sức mạnh công nghiệp Nhật Bản, hoàn thiện bởi VNGPOWER.',
    longDesc: 'Sản phẩm sử dụng động cơ Mitsubishi Heavy Industries (Nhật Bản) siêu bền bỉ. VNGPOWER nhập khẩu động cơ và đầu phát rời, sau đó thiết kế hệ thống khung bệ và vỏ cách âm phù hợp với điều kiện khí hậu Việt Nam. Đây là giải pháp nguồn điện dự phòng cao cấp cho các nhà máy FDI và Data Center.',
    range: '750kVA - 2500kVA',
    image: CAT_IMG_MITSUBISHI,
    technicalSpecs: [
      { label: 'Động cơ', value: 'Mitsubishi (Japan)' },
      { label: 'Lắp ráp tại', value: 'Nhà máy VNGPOWER' },
      { label: 'Vỏ cách âm', value: 'VNGPOWER Container Type' },
      { label: 'Đầu phát', value: 'Leroy Somer / Stamford' },
      { label: 'Tiêu chuẩn', value: 'TCVN / ISO 9001' },
      { label: 'Ứng dụng', value: 'Công nghiệp nặng' }
    ]
  },
  {
    id: 'Isuzu',
    name: 'IS Series - Powered By ISUZU',
    origin: 'Nhật Bản / Lắp ráp VN',
    desc: 'Động cơ Isuzu chính hãng, vận hành êm ái, bền bỉ.',
    longDesc: 'Dòng máy phát điện sử dụng động cơ Isuzu (Nhật Bản) nổi tiếng với độ bền cao và khả năng tiết kiệm nhiên liệu tuyệt vời. VNGPOWER nhập khẩu động cơ và lắp ráp đồng bộ với vỏ cách âm chất lượng cao, phù hợp cho các công trình dân dụng và công nghiệp nhẹ.',
    range: '20kVA - 125kVA',
    image: CAT_IMG_ISUZU,
    technicalSpecs: [
      { label: 'Động cơ', value: 'Isuzu (Japan)' },
      { label: 'Lắp ráp', value: 'VNGPOWER OEM' },
      { label: 'Đầu phát', value: 'Stamford' },
      { label: 'Vỏ chống ồn', value: 'VNGPOWER Standard' },
      { label: 'Tiêu chuẩn', value: 'ISO 9001' },
      { label: 'Ứng dụng', value: 'Văn phòng, Biệt thự' }
    ]
  },
  {
    id: 'Baudouin',
    name: 'BS Series - Powered By BAUDOUIN',
    origin: 'Pháp / Lắp ráp VN',
    desc: 'Công nghệ Pháp, chuyên dụng cho môi trường khắc nghiệt.',
    longDesc: 'VNGPOWER là đối tác OEM chính thức sử dụng động cơ Baudouin (Pháp). Chúng tôi thiết kế hệ thống khung đế chịu lực đặc biệt và sơn tĩnh điện tiêu chuẩn tàu biển, giúp máy hoạt động tốt ngay cả ở vùng biển đảo hay môi trường bụi bẩn.',
    range: '500kVA - 3000kVA',
    image: CAT_IMG_BAUDOUIN,
    technicalSpecs: [
      { label: 'Động cơ', value: 'Baudouin (France)' },
      { label: 'Lắp ráp', value: 'Nhà máy VNGPOWER' },
      { label: 'Đầu phát', value: 'Leroy Somer (France)' },
      { label: 'Kết cấu', value: 'Chassis thép chịu lực VNG' },
      { label: 'Bảo hành', value: '24 tháng' },
      { label: 'Ứng dụng', value: 'Công nghiệp nặng, Tàu biển' }
    ]
  }
];

export const PRODUCTS: Product[] = [
  // ================= CUMMINS PRODUCTS =================
  {
    id: 'c1',
    name: 'Máy phát điện VNGPOWER 45kVA Powered By Cummins',
    slug: 'may-phat-dien-vngpower-45kva-powered-by-cummins',
    brand: BrandType.CUMMINS,
    kva: 45,
    price: 'Contact',
    image: IMG_CUMMINS,
    shortDescription: 'Tổ máy lắp ráp tại Việt Nam. Động cơ Cummins 4BTA3.9-G2 chính hãng. Vỏ cách âm VNGPOWER.',
    longDescription: DESC_CUMMINS,
    isFeatured: true,
    specs: {
      engine: 'Cummins 4BTA3.9-G2',
      alternator: 'Stamford PI144K',
      fuelConsumption: '8 L/h',
      dimensions: '1800x900x1200 mm',
      weight: '950 kg'
    }
  },
  {
    id: 'c2',
    name: 'Máy phát điện VNGPOWER 60kVA Powered By Cummins',
    slug: 'may-phat-dien-vngpower-60kva-powered-by-cummins',
    brand: BrandType.CUMMINS,
    kva: 60,
    price: 'Contact',
    image: IMG_CUMMINS,
    shortDescription: 'Lắp ráp hoàn thiện bởi VNGPOWER. Phù hợp khách sạn mini, trường học.',
    longDescription: DESC_CUMMINS,
    specs: {
      engine: 'Cummins 4BTA3.9-G2',
      alternator: 'Stamford UCI224E',
      fuelConsumption: '11 L/h',
      dimensions: '2000x950x1300 mm',
      weight: '1100 kg'
    }
  },
  {
    id: 'c3',
    name: 'Máy phát điện VNGPOWER 100kVA Powered By Cummins',
    slug: 'may-phat-dien-vngpower-100kva-powered-by-cummins',
    brand: BrandType.CUMMINS,
    kva: 100,
    price: 'Contact',
    image: IMG_CUMMINS,
    shortDescription: 'Động cơ Cummins nhập khẩu, VNGPOWER đóng vỏ chống ồn tiêu chuẩn cao.',
    longDescription: DESC_CUMMINS,
    isFeatured: true,
    specs: {
      engine: 'Cummins 6BT5.9-G2',
      alternator: 'Stamford UCI274C',
      fuelConsumption: '15 L/h',
      dimensions: '2200x1000x1500 mm',
      weight: '1200 kg'
    }
  },
  {
    id: 'c4',
    name: 'Máy phát điện VNGPOWER 150kVA Powered By Cummins',
    slug: 'may-phat-dien-vngpower-150kva-powered-by-cummins',
    brand: BrandType.CUMMINS,
    kva: 150,
    price: 'Contact',
    image: IMG_CUMMINS,
    shortDescription: 'Công suất phổ biến cho tòa nhà văn phòng. Lắp ráp tại nhà máy VNGPOWER.',
    longDescription: DESC_CUMMINS,
    specs: {
      engine: 'Cummins 6BTAA5.9-G2',
      alternator: 'Stamford UCI274F',
      fuelConsumption: '22 L/h',
      dimensions: '2400x1050x1500 mm',
      weight: '1600 kg'
    }
  },
  {
    id: 'c5',
    name: 'Máy phát điện VNGPOWER 250kVA Powered By Cummins',
    slug: 'may-phat-dien-vngpower-250kva-powered-by-cummins',
    brand: BrandType.CUMMINS,
    kva: 250,
    price: 'Contact',
    image: IMG_CUMMINS,
    shortDescription: 'Động cơ Cummins 6CTAA8.3 mạnh mẽ. Vỏ cách âm VNGPOWER dày 2mm.',
    longDescription: DESC_CUMMINS,
    isFeatured: true,
    specs: {
      engine: 'Cummins 6CTAA8.3-G2',
      alternator: 'Stamford UCDI274K',
      fuelConsumption: '34 L/h',
      dimensions: '2800x1100x1600 mm',
      weight: '2100 kg'
    }
  },
  {
    id: 'c6',
    name: 'Máy phát điện VNGPOWER 350kVA Powered By Cummins',
    slug: 'may-phat-dien-vngpower-350kva-powered-by-cummins',
    brand: BrandType.CUMMINS,
    kva: 350,
    price: 'Contact',
    image: IMG_CUMMINS,
    shortDescription: 'Động cơ NTA855 nổi tiếng bền bỉ. Lắp ráp và kiểm định bởi VNGPOWER.',
    longDescription: DESC_CUMMINS,
    specs: {
      engine: 'Cummins NTA855-G1B',
      alternator: 'Stamford HCI444E',
      fuelConsumption: '50 L/h',
      dimensions: '3200x1200x1900 mm',
      weight: '3200 kg'
    }
  },
  {
    id: 'c7',
    name: 'Máy phát điện VNGPOWER 500kVA Powered By Cummins',
    slug: 'may-phat-dien-vngpower-500kva-powered-by-cummins',
    brand: BrandType.CUMMINS,
    kva: 500,
    price: 'Contact',
    image: IMG_CUMMINS,
    shortDescription: 'Dòng Heavy Duty cho nhà máy. Động cơ KTA19. Lắp ráp tại Việt Nam.',
    longDescription: DESC_CUMMINS,
    specs: {
      engine: 'Cummins KTA19-G3A',
      alternator: 'Stamford HCI544C',
      fuelConsumption: '76 L/h',
      dimensions: '3600x1300x2000 mm',
      weight: '4500 kg'
    }
  },

  // ================= HYUNDAI PRODUCTS =================
  {
    id: 'h1',
    name: 'Máy phát điện VNGPOWER 50kVA Powered By Hyundai',
    slug: 'may-phat-dien-vngpower-50kva-powered-by-hyundai',
    brand: BrandType.HYUNDAI,
    kva: 50,
    price: 'Contact',
    image: IMG_HYUNDAI,
    shortDescription: 'Động cơ Hyundai chính hãng, VNGPOWER lắp ráp đồng bộ.',
    longDescription: DESC_HYUNDAI,
    isFeatured: true,
    specs: {
      engine: 'Hyundai D4BB',
      alternator: 'Hyundai HY50',
      fuelConsumption: '8 L/h',
      dimensions: '1800x900x1200 mm',
      weight: '850 kg'
    }
  },
  {
    id: 'h2',
    name: 'Máy phát điện VNGPOWER 100kVA Powered By Hyundai',
    slug: 'may-phat-dien-vngpower-100kva-powered-by-hyundai',
    brand: BrandType.HYUNDAI,
    kva: 100,
    price: 'Contact',
    image: IMG_HYUNDAI,
    shortDescription: 'Vận hành bền bỉ, vỏ chống ồn VNGPOWER sản xuất.',
    longDescription: DESC_HYUNDAI,
    specs: {
      engine: 'Hyundai D4BF',
      alternator: 'Hyundai HY100',
      fuelConsumption: '16 L/h',
      dimensions: '2300x1050x1400 mm',
      weight: '1350 kg'
    }
  },
  {
    id: 'h3',
    name: 'Máy phát điện VNGPOWER 150kVA Powered By Hyundai',
    slug: 'may-phat-dien-vngpower-150kva-powered-by-hyundai',
    brand: BrandType.HYUNDAI,
    kva: 150,
    price: 'Contact',
    image: IMG_HYUNDAI,
    shortDescription: 'Giải pháp kinh tế cho tòa nhà. Lắp ráp trong nước.',
    longDescription: DESC_HYUNDAI,
    specs: {
      engine: 'Hyundai D6AC',
      alternator: 'Hyundai HY150',
      fuelConsumption: '24 L/h',
      dimensions: '2600x1100x1500 mm',
      weight: '1800 kg'
    }
  },
  {
    id: 'h4',
    name: 'Máy phát điện VNGPOWER 250kVA Powered By Hyundai',
    slug: 'may-phat-dien-vngpower-250kva-powered-by-hyundai',
    brand: BrandType.HYUNDAI,
    kva: 250,
    price: 'Contact',
    image: IMG_HYUNDAI,
    shortDescription: 'Động cơ Hyundai công suất lớn, phù hợp cho nhà xưởng quy mô vừa.',
    longDescription: DESC_HYUNDAI,
    isFeatured: true,
    specs: {
      engine: 'Hyundai D6AC-G',
      alternator: 'Mecc Alte',
      fuelConsumption: '38 L/h',
      dimensions: '3000x1200x1600 mm',
      weight: '2200 kg'
    }
  },
  {
    id: 'h5',
    name: 'Máy phát điện VNGPOWER 80kVA Powered By Hyundai',
    slug: 'may-phat-dien-vngpower-80kva-powered-by-hyundai',
    brand: BrandType.HYUNDAI,
    kva: 80,
    price: 'Contact',
    image: IMG_HYUNDAI,
    shortDescription: 'Bền bỉ, tiết kiệm nhiên liệu. Phù hợp trang trại, trường học.',
    longDescription: DESC_HYUNDAI,
    isFeatured: true,
    specs: {
      engine: 'Hyundai D4BA',
      alternator: 'Mecc Alte',
      fuelConsumption: '12 L/h',
      dimensions: '2100x950x1300 mm',
      weight: '1150 kg'
    }
  },

  // ================= BAUDOUIN PRODUCTS =================
  {
    id: 'b1',
    name: 'Máy phát điện VNGPOWER 500kVA Powered By Baudouin',
    slug: 'may-phat-dien-vngpower-500kva-powered-by-baudouin',
    brand: BrandType.BAUDOUIN,
    kva: 500,
    price: 'Contact',
    image: IMG_BAUDOUIN,
    shortDescription: 'Động cơ Pháp, VNGPOWER lắp ráp chuyên dụng cho công nghiệp.',
    longDescription: DESC_GENERIC,
    isFeatured: true,
    specs: {
      engine: 'Baudouin 6M26G550/5',
      alternator: 'Leroy Somer',
      fuelConsumption: '70 L/h',
      dimensions: '3500x1400x2000 mm',
      weight: '3500 kg'
    }
  },
  {
    id: 'b2',
    name: 'Máy phát điện VNGPOWER 1000kVA Powered By Baudouin',
    slug: 'may-phat-dien-vngpower-1000kva-powered-by-baudouin',
    brand: BrandType.BAUDOUIN,
    kva: 1000,
    price: 'Contact',
    image: IMG_BAUDOUIN,
    shortDescription: 'Công suất lớn, khung đế chịu lực do VNGPOWER thiết kế.',
    longDescription: DESC_GENERIC,
    specs: {
      engine: 'Baudouin 12M26G1100/5',
      alternator: 'Leroy Somer',
      fuelConsumption: '140 L/h',
      dimensions: '4500x1800x2400 mm',
      weight: '7000 kg'
    }
  },

   // ================= KOKURO PRODUCTS =================
   {
    id: 'k1',
    name: 'Máy phát điện VNGPOWER 25kVA Powered By Kokuro',
    slug: 'may-phat-dien-vngpower-25kva-powered-by-kokuro',
    brand: BrandType.KOKURO,
    kva: 25,
    price: 'Contact',
    image: IMG_KOKURO,
    shortDescription: 'Động cơ Kokuro Nhật Bản, VNGPOWER đóng vỏ siêu cách âm.',
    longDescription: DESC_GENERIC,
    isFeatured: true,
    specs: {
      engine: 'Kokuro 4JE4',
      alternator: 'Stamford',
      fuelConsumption: '4 L/h',
      dimensions: '1500x800x1000 mm',
      weight: '600 kg'
    }
  },
  {
    id: 'k2',
    name: 'Máy phát điện VNGPOWER 40kVA Powered By Kokuro',
    slug: 'may-phat-dien-vngpower-40kva-powered-by-kokuro',
    brand: BrandType.KOKURO,
    kva: 40,
    price: 'Contact',
    image: IMG_KOKURO,
    shortDescription: 'Siêu bền, tiết kiệm dầu. Lắp ráp tại Việt Nam.',
    longDescription: DESC_GENERIC,
    isFeatured: true,
    specs: {
      engine: 'Kokuro 4JG1',
      alternator: 'Stamford',
      fuelConsumption: '6 L/h',
      dimensions: '1700x900x1100 mm',
      weight: '800 kg'
    }
  },

  // ================= MITSUBISHI PRODUCTS =================
  {
    id: 'm1',
    name: 'Máy phát điện VNGPOWER 1000kVA Powered By Mitsubishi',
    slug: 'may-phat-dien-vngpower-1000kva-powered-by-mitsubishi',
    brand: BrandType.MITSUBISHI,
    kva: 1000,
    price: 'Contact',
    image: IMG_MITSUBISHI,
    shortDescription: 'Động cơ Mitsubishi Nhật Bản. VNGPOWER lắp ráp hoàn thiện.',
    longDescription: DESC_MITSUBISHI,
    isFeatured: true,
    specs: {
      engine: 'Mitsubishi S12H-PTA',
      alternator: 'Leroy Somer',
      fuelConsumption: '150 L/h',
      dimensions: '4600x1900x2500 mm',
      weight: '8500 kg'
    }
  },
  {
    id: 'm2',
    name: 'Máy phát điện VNGPOWER 2000kVA Powered By Mitsubishi',
    slug: 'may-phat-dien-vngpower-2000kva-powered-by-mitsubishi',
    brand: BrandType.MITSUBISHI,
    kva: 2000,
    price: 'Contact',
    image: IMG_MITSUBISHI,
    shortDescription: 'Công suất cực đại. Hệ thống vỏ Container do VNGPOWER sản xuất.',
    longDescription: DESC_MITSUBISHI,
    specs: {
      engine: 'Mitsubishi S16R-PTA',
      alternator: 'Leroy Somer',
      fuelConsumption: '280 L/h',
      dimensions: '5800x2300x2900 mm',
      weight: '12000 kg'
    }
  },
  {
    id: 'm3',
    name: 'Máy phát điện VNGPOWER 1500kVA Powered By Mitsubishi',
    slug: 'may-phat-dien-vngpower-1500kva-powered-by-mitsubishi',
    brand: BrandType.MITSUBISHI,
    kva: 1500,
    price: 'Contact',
    image: IMG_MITSUBISHI,
    shortDescription: 'Động cơ Nhật Bản mạnh mẽ, vỏ cách âm tiêu chuẩn xuất khẩu.',
    longDescription: DESC_MITSUBISHI,
    isFeatured: true,
    specs: {
      engine: 'Mitsubishi S12R-PTA',
      alternator: 'Stamford',
      fuelConsumption: '210 L/h',
      dimensions: '5000x2100x2700 mm',
      weight: '10500 kg'
    }
  },

  // ================= ISUZU PRODUCTS =================
  {
    id: 'i1',
    name: 'Máy phát điện VNGPOWER 30kVA Powered By Isuzu',
    slug: 'may-phat-dien-vngpower-30kva-powered-by-isuzu',
    brand: BrandType.ISUZU,
    kva: 30,
    price: 'Contact',
    image: IMG_ISUZU,
    shortDescription: 'Động cơ Isuzu nhập khẩu chính hãng, hoạt động êm ái.',
    longDescription: DESC_GENERIC,
    isFeatured: true,
    specs: {
      engine: 'Isuzu 4JE4-G',
      alternator: 'Stamford',
      fuelConsumption: '5 L/h',
      dimensions: '1600x800x1100 mm',
      weight: '750 kg'
    }
  },

  // ================= ADDITIONAL PRODUCTS =================
  {
    id: 'i2-100',
    name: 'Máy phát điện VNGPOWER 100kVA Powered By Isuzu',
    slug: 'may-phat-dien-vngpower-100kva-powered-by-isuzu',
    brand: BrandType.ISUZU,
    kva: 100,
    price: 'Contact',
    image: IMG_ISUZU,
    shortDescription: 'Động cơ Isuzu AI-4JJ1X siêu êm, phù hợp văn phòng.',
    longDescription: DESC_GENERIC,
    specs: {
      engine: 'Isuzu AI-4JJ1X',
      alternator: 'Stamford UCI274',
      fuelConsumption: '14 L/h',
      dimensions: '2200x1000x1500 mm',
      weight: '1300 kg'
    }
  },
  {
    id: 'b3-100',
    name: 'Máy phát điện VNGPOWER 100kVA Powered By Baudouin',
    slug: 'may-phat-dien-vngpower-100kva-powered-by-baudouin',
    brand: BrandType.BAUDOUIN,
    kva: 100,
    price: 'Contact',
    image: IMG_BAUDOUIN,
    shortDescription: 'Động cơ Baudouin Pháp mạnh mẽ, tải nặng tốt.',
    longDescription: DESC_GENERIC,
    specs: {
      engine: 'Baudouin 4M11G110/5',
      alternator: 'Leroy Somer TAL-A44-D',
      fuelConsumption: '15 L/h',
      dimensions: '2300x1050x1600 mm',
      weight: '1450 kg'
    }
  },
   {
    id: 'm4-100',
    name: 'Máy phát điện VNGPOWER 100kVA Powered By Mitsubishi',
    slug: 'may-phat-dien-vngpower-100kva-powered-by-mitsubishi',
    brand: BrandType.MITSUBISHI,
    kva: 100,
    price: 'Contact',
    image: IMG_MITSUBISHI,
    shortDescription: 'Động cơ Mitsubishi Shanghai liên doanh, giá tốt.',
    longDescription: DESC_MITSUBISHI,
    specs: {
      engine: 'Mitsubishi S4K-T',
      alternator: 'Stamford',
      fuelConsumption: '14.5 L/h',
      dimensions: '2250x1000x1550 mm',
      weight: '1350 kg'
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'du-an-cung-cap-nguon-dien-benh-vien-cho-ray',
    title: 'Cung cấp 3 máy phát điện 1500kVA cho Bệnh Viện Chợ Rẫy',
    customer: 'Bệnh Viện Chợ Rẫy',
    year: 2023,
    location: 'TP. Hồ Chí Minh',
    capacity: '3 x 1500kVA (Cummins)',
    description: 'Lắp đặt hệ thống điện dự phòng công suất lớn đảm bảo hoạt động 24/7 cho khu điều trị tích cực.',
    longDescription: PROJECT_DESC_HOSPITAL,
    challenge: 'Thi công trong môi trường bệnh viện đang hoạt động, yêu cầu tiếng ồn cực thấp và không được làm gián đoạn nguồn điện hiện hữu. Không gian phòng máy hạn chế dưới tầng hầm, đòi hỏi phương án đưa máy xuống khó khăn.',
    solution: 'Sử dụng hệ thống cách âm tiêu chuẩn cao cấp giảm độ ồn xuống < 70dB tại 1m. Sử dụng phương án tháo rời két nước và lắp ráp lại tại hầm để đưa máy vào vị trí. Hệ thống hòa đồng bộ ComAp (Châu Âu) giúp 3 máy hoạt động linh hoạt theo tải thực tế.',
    image: PROJECT_IMG_HOSPITAL
  },
  {
    id: 'p2',
    slug: 'du-an-nha-may-samsung-thai-nguyen',
    title: 'Hệ thống điện dự phòng Nhà máy Samsung Thái Nguyên',
    customer: 'Samsung Electronics Vietnam',
    year: 2022,
    location: 'Thái Nguyên',
    capacity: '2 x 2000kVA (Mitsubishi)',
    description: 'Dự án trọng điểm cung cấp nguồn điện ổn định cho dây chuyền sản xuất chip bán dẫn.',
    longDescription: PROJECT_DESC_SAMSUNG,
    challenge: 'Tiến độ giao hàng và lắp đặt cực gấp (45 ngày). Yêu cầu thử tải giả 100% tại công trình liên tục trong 8 giờ.',
    solution: 'Huy động toàn bộ nhân lực làm việc 3 ca để hoàn thành lắp đặt đường ống khói và hệ thống nhiên liệu trong 10 ngày. Tổ chức test tải thành công rực rỡ, bàn giao đúng tiến độ.',
    image: PROJECT_IMG_FACTORY
  },
  {
    id: 'p3',
    slug: 'du-an-vinpearl-nha-trang',
    title: 'Dự án Khu nghỉ dưỡng Vinpearl Nha Trang',
    customer: 'Vingroup',
    year: 2023,
    location: 'Nha Trang, Khánh Hòa',
    capacity: '5 x 500kVA (Baudouin)',
    description: 'Hệ thống điện dự phòng cho quần thể khách sạn và khu vui chơi giải trí.',
    longDescription: PROJECT_DESC_RESORT,
    challenge: 'Vận chuyển máy ra đảo bằng phà, lắp đặt trên địa hình đồi dốc. Môi trường biển yêu cầu sơn chống ăn mòn đặc biệt.',
    solution: 'Sử dụng động cơ Baudouin chuyên dụng cho môi trường biển. Vỏ cách âm được sơn phủ 3 lớp Epoxy chống ăn mòn muối biển. Hệ thống bồn dầu 10,000L đảm bảo vận hành liên tục 48h.',
    image: PROJECT_IMG_RESORT
  },
  {
    id: 'p4',
    slug: 'du-an-toa-nha-lanmark-81',
    title: 'Máy phát điện cho Tòa nhà Landmark 81',
    customer: 'Vinhomes',
    year: 2021,
    location: 'TP. Hồ Chí Minh',
    capacity: '4 x 2500kVA (Cummins)',
    description: 'Cung cấp nguồn điện dự phòng cho tòa nhà cao nhất Việt Nam.',
    longDescription: PROJECT_DESC_LANDMARK,
    challenge: 'Hệ thống thoát khói phải đưa lên độ cao 460m hoặc xử lý tại chỗ đạt chuẩn khí thải Euro 5.',
    solution: 'Lắp đặt hệ thống xử lý khí thải bằng bộ lọc xúc tác (DPF) ngay tại phòng máy, đảm bảo khí thải ra môi trường đạt chuẩn sạch, không cần ống khói cao.',
    image: PROJECT_IMG_BUILDING
  },
  {
    id: 'p5',
    slug: 'du-an-data-center-viettel',
    title: 'Trung tâm dữ liệu Viettel IDC Hòa Lạc',
    customer: 'Viettel IDC',
    year: 2024,
    location: 'Hà Nội',
    capacity: '10 x 2000kVA (Mitsubishi)',
    description: 'Hệ thống điện dự phòng Tier 3 cho Data Center lớn nhất miền Bắc.',
    longDescription: PROJECT_DESC_DATACENTER,
    challenge: 'Yêu cầu hệ thống điều khiển cực kỳ phức tạp, tự động hòa lưới và chia tải chính xác đến từng kW.',
    solution: 'Sử dụng bộ điều khiển Deif (Đan Mạch) cao cấp nhất. Hệ thống giám sát từ xa qua SCADA cho phép kỹ sư Viettel theo dõi 24/24.',
    image: PROJECT_IMG_DATACENTER
  },
  {
    id: 'p6',
    slug: 'du-an-nha-may-thuy-san-minh-phu',
    title: 'Nhà máy chế biến thủy sản Minh Phú',
    customer: 'Tập đoàn Minh Phú',
    year: 2022,
    location: 'Cà Mau',
    capacity: '2 x 1000kVA (Baudouin)',
    description: 'Nguồn điện ổn định cho kho lạnh bảo quản tôm xuất khẩu.',
    longDescription: PROJECT_DESC_SEAFOOD,
    challenge: 'Lắp đặt tại vùng đất yếu, dễ sụt lún.',
    solution: 'Thiết kế bệ máy bê tông cốt thép trên hệ cọc nhồi sâu 20m. Sử dụng lò xo chống rung chuyên dụng giảm chấn động xuống nền móng.',
    image: PROJECT_IMG_COLD_STORAGE
  },
  {
    id: 'p7',
    slug: 'du-an-resort-intercontinental-phu-quoc',
    title: 'InterContinental Phu Quoc Long Beach Resort',
    customer: 'BIM Group',
    year: 2023,
    location: 'Phú Quốc',
    capacity: '3 x 1250kVA (Cummins)',
    description: 'Cung cấp điện dự phòng tiêu chuẩn 5 sao quốc tế.',
    longDescription: PROJECT_DESC_RESORT, // Reusing Resort description layout
    challenge: 'Độ ồn yêu cầu < 65dB tại 1m (tương đương tiếng nói chuyện thì thầm).',
    solution: 'Thiết kế phòng máy "Box in Box" (phòng cách âm trong phòng máy). Tiêu âm trần, tường và sàn 3 lớp. Kết quả đo đạc thực tế đạt 62dB.',
    image: PROJECT_IMG_RESORT
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ông Trần Văn Minh',
    role: 'Giám đốc Kỹ thuật',
    company: 'Samsung Vietnam',
    content: 'VNGPOWER là đối tác tin cậy của chúng tôi trong nhiều năm qua. Sản phẩm chính hãng, dịch vụ bảo trì rất chuyên nghiệp và nhanh chóng.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    id: 't2',
    name: 'Bà Nguyễn Thị Lan',
    role: 'Quản lý Mua hàng',
    company: 'Vingroup',
    content: 'Chúng tôi đánh giá cao sự tận tâm của đội ngũ VNGPOWER. Máy phát điện hoạt động rất ổn định, đáp ứng tốt các tiêu chuẩn khắt khe của Vinpearl.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop'
  },
   {
    id: 't3',
    name: 'Ông David Johnson',
    role: 'Plant Manager',
    company: 'Coca-Cola Vietnam',
    content: 'Great service and high-quality generators. The installation team was very professional and finished ahead of schedule.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    id: 't4',
    name: 'Ông Lê Hoàng',
    role: 'Giám đốc Dự án',
    company: 'Novaland Group',
    content: 'Tiến độ thi công rất nhanh, đáp ứng được yêu cầu khắt khe của dự án Aqua City. Máy vận hành êm, không ảnh hưởng cư dân.',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'huong-dan-tinh-cong-suat-may-phat-dien',
    title: 'Hướng Dẫn Tính Toán Công Suất Máy Phát Điện Cho Nhà Xưởng',
    excerpt: 'Làm sao để chọn đúng công suất máy phát điện? Tránh lãng phí hoặc quá tải? Bài viết này sẽ hướng dẫn chi tiết cách tính công suất...',
    content: `
      <p class="mb-4">Việc tính toán và lựa chọn công suất máy phát điện phù hợp là vô cùng quan trọng. Nếu chọn công suất quá nhỏ sẽ dẫn đến tình trạng quá tải, máy không hoạt động được hoặc giảm tuổi thọ. Ngược lại, nếu chọn công suất quá lớn sẽ gây lãng phí chi phí đầu tư và vận hành (máy chạy non tải sẽ tiêu hao nhiên liệu và nhanh hỏng động cơ).</p>
      
      <h3 class="text-xl font-bold text-navy-900 mb-3 mt-6">1. Liệt kê các thiết bị tiêu thụ điện</h3>
      <p class="mb-4">Đầu tiên, bạn cần lập danh sách tất cả các thiết bị điện cần sử dụng khi mất điện lưới. Lưu ý phân loại thiết bị ưu tiên (bắt buộc dùng) và thiết bị không ưu tiên (có thể tắt).</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Động cơ điện (Motor): Cần lưu ý dòng khởi động (thường gấp 3-7 lần dòng định mức).</li>
        <li>Thiết bị chiếu sáng, văn phòng: Tính tổng công suất danh định.</li>
        <li>Máy lạnh, điều hòa: Cũng có dòng khởi động lớn.</li>
      </ul>

      <h3 class="text-xl font-bold text-navy-900 mb-3 mt-6">2. Hệ số khởi động và hệ số đồng thời</h3>
      <p class="mb-4">Không phải tất cả thiết bị đều hoạt động cùng lúc. Hệ số đồng thời thường lấy khoảng 0.7 - 0.8. Ngoài ra, cần quan tâm đến hệ số công suất (Cos Phi), thông thường là 0.8.</p>
      
      <h3 class="text-xl font-bold text-navy-900 mb-3 mt-6">3. Công thức tính sơ bộ</h3>
      <p class="mb-4 bg-gray-100 p-4 rounded border-l-4 border-safety-500 font-mono">
        Công suất máy phát (kVA) = (Tổng công suất tiêu thụ (kW) / 0.8) x Hệ số an toàn (1.25)
      </p>
      <p class="mb-4">Ví dụ: Tổng công suất thiết bị là 80kW. <br/> Công suất máy phát cần chọn = (80 / 0.8) * 1.25 = 125 kVA.</p>

      <p class="italic">Để được tư vấn chính xác nhất, vui lòng liên hệ các kỹ sư của VNGPOWER để khảo sát thực tế.</p>
    `,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop',
    author: 'Kỹ sư Nguyễn Văn A',
    date: '15/05/2023',
    category: 'Kỹ Thuật',
    tags: ['tính công suất', 'tư vấn', 'kỹ thuật']
  },
  {
    id: 'b2',
    slug: 'quy-trinh-bao-tri-may-phat-dien',
    title: 'Quy Trình Bảo Trì Máy Phát Điện Công Nghiệp Chuẩn ISO',
    excerpt: 'Bảo trì định kỳ là chìa khóa để máy phát điện luôn sẵn sàng hoạt động 100%. Tìm hiểu quy trình 4 cấp độ bảo dưỡng của VNGPOWER.',
    content: `
      <p class="mb-4">Máy phát điện là thiết bị dự phòng, có thể cả tháng không chạy lần nào. Tuy nhiên, nếu không bảo trì, khi mất điện máy có thể không khởi động được. Dưới đây là quy trình bảo trì tiêu chuẩn.</p>

      <h3 class="text-xl font-bold text-navy-900 mb-3 mt-6">Cấp độ 1: Bảo trì mỗi 6 tháng hoặc 250 giờ chạy máy</h3>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Kiểm tra và thay dầu nhớt bôi trơn.</li>
        <li>Thay lọc nhớt, lọc nhiên liệu sơ cấp.</li>
        <li>Kiểm tra nước làm mát, bổ sung nếu thiếu.</li>
        <li>Kiểm tra ắc quy và sạc.</li>
      </ul>

      <h3 class="text-xl font-bold text-navy-900 mb-3 mt-6">Cấp độ 2: Bảo trì mỗi 12 tháng hoặc 1000 giờ</h3>
      <p class="mb-4">Ngoài các hạng mục cấp 1, cần thực hiện thêm:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Thay lọc gió.</li>
        <li>Thay nước làm mát và súc rửa két nước.</li>
        <li>Kiểm tra dây curoa, tăng đưa.</li>
        <li>Kiểm tra rò rỉ hệ thống nhiên liệu.</li>
      </ul>

      <p class="mb-4">Việc bảo trì đúng hạn giúp kéo dài tuổi thọ máy lên tới 20 năm.</p>
    `,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    author: 'VNGPOWER Support',
    date: '20/06/2023',
    category: 'Dịch Vụ',
    tags: ['bảo trì', 'sửa chữa', 'dịch vụ']
  },
  {
    id: 'b3',
    slug: 'so-sanh-cummins-va-mitsubishi',
    title: 'So Sánh Máy Phát Điện Cummins và Mitsubishi: Nên Chọn Loại Nào?',
    excerpt: 'Cummins (Mỹ) và Mitsubishi (Nhật) là hai ông lớn trong ngành. Bài viết này sẽ phân tích ưu nhược điểm để giúp bạn ra quyết định.',
    content: `
      <p class="mb-4">Khách hàng thường phân vân giữa Cummins và Mitsubishi khi đầu tư máy phát điện công suất lớn. Dưới đây là bảng so sánh nhanh:</p>

      <h3 class="text-xl font-bold text-navy-900 mb-3 mt-6">1. Máy phát điện Cummins (Mỹ)</h3>
      <p class="mb-4"><strong>Ưu điểm:</strong></p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Dải công suất rất rộng (từ 20kVA đến 3000kVA).</li>
        <li>Động cơ cực khỏe, chịu tải biến thiên tốt (Step load).</li>
        <li>Phổ biến toàn cầu, phụ tùng thay thế rất dễ tìm.</li>
      </ul>
      <p class="mb-4"><strong>Nhược điểm:</strong> Giá thành cao (với dòng xuất xứ Mỹ/Anh). Dòng liên doanh Trung Quốc giá rẻ hơn nhưng chất lượng thấp hơn.</p>

      <h3 class="text-xl font-bold text-navy-900 mb-3 mt-6">2. Máy phát điện Mitsubishi (Nhật Bản)</h3>
      <p class="mb-4"><strong>Ưu điểm:</strong></p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Siêu bền bỉ, "nồi đồng cối đá" đúng chất Nhật.</li>
        <li>Vận hành êm ái, tiết kiệm nhiên liệu hơn ở tải thấp.</li>
        <li>Thường được các chủ đầu tư Nhật Bản ưu tiên chỉ định.</li>
      </ul>
      <p class="mb-4"><strong>Nhược điểm:</strong> Ít lựa chọn ở dải công suất nhỏ (dưới 500kVA). Giá thành dòng nhập nguyên chiếc từ Nhật rất cao.</p>

      <h3 class="text-xl font-bold text-navy-900 mb-3 mt-6">Kết luận</h3>
      <p class="mb-4">Nếu bạn cần máy công suất lớn cho nhà máy, Data Center, <strong>Mitsubishi</strong> là lựa chọn tuyệt vời cho sự ổn định dài hạn. Nếu bạn cần sự linh hoạt, dải công suất đa dạng và phụ tùng dễ kiếm, <strong>Cummins</strong> là số 1.</p>
    `,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    author: 'Admin',
    date: '02/08/2023',
    category: 'Tư Vấn',
    tags: ['so sánh', 'cummins', 'mitsubishi']
  }
];

// Mock Pages for Sales Page Demo (Nội dung Sales Page Mẫu)
export const MOCK_PAGES = {
  "100kva": {
    id: 100,
    title: "Máy Phát Điện 100kVA Công Nghiệp - Lắp Ráp Tại Việt Nam",
    excerpt: "Tổng kho máy phát điện 100kVA Cummins, Hyundai, Isuzu. Cam kết giá gốc nhà máy VNGPOWER. Bảo hành 24 tháng. Hỗ trợ lắp đặt toàn quốc.",
    content: `
      <div class="space-y-6 text-gray-700">
        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 animate-fade-in">
          <h3 class="text-xl font-bold text-navy-900 mb-2">🔥 ƯU ĐÃI ĐẶC BIỆT THÁNG NÀY</h3>
          <p class="mb-2">Khi đặt mua máy phát điện 100kVA tại VNGPOWER, quý khách sẽ nhận ngay:</p>
          <ul class="list-disc list-inside font-medium text-navy-900">
            <li>✅ Giảm trực tiếp <strong>5% - 10%</strong> giá trị máy.</li>
            <li>✅ Miễn phí vận chuyển & lắp đặt tại TP.HCM và Hà Nội.</li>
            <li>✅ Tặng kèm gói bảo trì định kỳ 1 năm đầu tiên.</li>
            <li>✅ Tặng kèm tủ chuyển nguồn tự động (ATS) trị giá 10.000.000đ.</li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-navy-900 uppercase border-b pb-2">1. GIỚI THIỆU MÁY PHÁT ĐIỆN 100KVA</h2>
        <p>
          Máy phát điện công suất <strong>100kVA (tương đương 80kW)</strong> là dòng máy công nghiệp phổ biến nhất, đáp ứng hoàn hảo nhu cầu sử dụng điện dự phòng cho các công trình quy mô vừa và nhỏ. 
          Với công suất này, máy có thể vận hành ổn định hệ thống chiếu sáng, thang máy, máy bơm PCCC và hệ thống điều hòa trung tâm cho:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="flex items-center p-3 bg-gray-50 rounded shadow-sm">
             <span class="text-2xl mr-3">🏨</span> 
             <span><strong>Khách sạn mini:</strong> Quy mô 25 - 40 phòng.</span>
          </div>
          <div class="flex items-center p-3 bg-gray-50 rounded shadow-sm">
             <span class="text-2xl mr-3">🏢</span> 
             <span><strong>Văn phòng:</strong> Tòa nhà 5-7 tầng, diện tích sàn 300m2.</span>
          </div>
          <div class="flex items-center p-3 bg-gray-50 rounded shadow-sm">
             <span class="text-2xl mr-3">🏭</span> 
             <span><strong>Nhà xưởng nhỏ:</strong> Xưởng may, xưởng gỗ, gia công cơ khí.</span>
          </div>
          <div class="flex items-center p-3 bg-gray-50 rounded shadow-sm">
             <span class="text-2xl mr-3">🏥</span> 
             <span><strong>Phòng khám:</strong> Đa khoa, trung tâm tiêm chủng.</span>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-navy-900 uppercase border-b pb-2 mt-10">2. VNGPOWER - NHÀ SẢN XUẤT (OEM) KHÁC BIỆT NHƯ THẾ NÀO?</h2>
        <p>
           Thay vì nhập khẩu nguyên chiếc với giá thành đắt đỏ và khó khăn trong việc bảo hành, VNGPOWER lựa chọn con đường trở thành nhà sản xuất và lắp ráp (OEM) tại Việt Nam theo tiêu chuẩn Quốc tế ISO 9001:2015.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
           <div class="text-center p-6 border rounded-xl hover:shadow-lg transition bg-white">
              <div class="text-4xl mb-4">⚙️</div>
              <h4 class="font-bold text-lg text-navy-900 mb-2">Động Cơ Chính Hãng</h4>
              <p class="text-sm text-gray-600">Nhập khẩu trực tiếp (CO/CQ) từ Cummins, Hyundai, Isuzu, Mitsubishi. Nói KHÔNG với hàng trôi nổi, hàng dựng lại.</p>
           </div>
           <div class="text-center p-6 border rounded-xl hover:shadow-lg transition bg-white">
              <div class="text-4xl mb-4">🔇</div>
              <h4 class="font-bold text-lg text-navy-900 mb-2">Vỏ Cách Âm Độc Quyền</h4>
              <p class="text-sm text-gray-600">Do VNGPOWER sản xuất bằng thép dày 2mm, sơn tĩnh điện, tiêu âm đạt chuẩn < 68dB@7m (Êm hơn máy nhập).</p>
           </div>
           <div class="text-center p-6 border rounded-xl hover:shadow-lg transition bg-white">
              <div class="text-4xl mb-4">💰</div>
              <h4 class="font-bold text-lg text-navy-900 mb-2">Giá Gốc Nhà Máy</h4>
              <p class="text-sm text-gray-600">Tiết kiệm 20-30% chi phí so với máy nhập khẩu nguyên chiếc. Phụ tùng thay thế luôn sẵn có trong kho.</p>
           </div>
        </div>

        <h2 class="text-2xl font-bold text-navy-900 uppercase border-b pb-2 mt-10">3. TOP 3 DÒNG MÁY 100KVA ĐÁNG MUA NHẤT</h2>
        <p class="mb-4">Dựa trên kinh nghiệm lắp đặt hơn 1000 dự án, dưới đây là 3 sự lựa chọn tốt nhất cho phân khúc 100kVA:</p>
        
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr class="bg-navy-900 text-white">
                <th class="p-3 border border-gray-300">Tiêu chí</th>
                <th class="p-3 border border-gray-300 bg-safety-600">CS Series (Cummins)</th>
                <th class="p-3 border border-gray-300">HS Series (Hyundai)</th>
                <th class="p-3 border border-gray-300">IS Series (Isuzu)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-gray-300 font-bold">Xuất xứ động cơ</td>
                <td class="p-3 border border-gray-300 font-bold text-center text-safety-600">Mỹ (Liên doanh TQ)</td>
                <td class="p-3 border border-gray-300 text-center">Hàn Quốc</td>
                <td class="p-3 border border-gray-300 text-center">Nhật Bản</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-300 font-bold">Độ bền & Tải</td>
                <td class="p-3 border border-gray-300 text-center">⭐⭐⭐⭐⭐ (Rất khỏe)</td>
                <td class="p-3 border border-gray-300 text-center">⭐⭐⭐⭐ (Ổn định)</td>
                <td class="p-3 border border-gray-300 text-center">⭐⭐⭐⭐⭐ (Siêu bền)</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-300 font-bold">Độ ồn & Nhiên liệu</td>
                <td class="p-3 border border-gray-300 text-center">Trung bình</td>
                <td class="p-3 border border-gray-300 text-center">Tốt</td>
                <td class="p-3 border border-gray-300 text-center">Rất tốt (Siêu tiết kiệm)</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-300 font-bold">Giá thành</td>
                <td class="p-3 border border-gray-300 text-center font-bold text-red-600">Rất Tốt (Best Seller)</td>
                <td class="p-3 border border-gray-300 text-center">Trung bình</td>
                <td class="p-3 border border-gray-300 text-center">Cao</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm italic text-gray-500 mt-2">(*): Nhận báo giá chi tiết từng dòng bằng cách nhấn nút "Báo Giá" bên dưới.</p>

        <h2 class="text-2xl font-bold text-navy-900 uppercase border-b pb-2 mt-10">4. CHI PHÍ VẬN HÀNH (ƯỚC TÍNH)</h2>
        <p>Một trong những yếu tố quan trọng khi chọn mua máy phát điện là chi phí nhiên liệu. Dưới đây là bảng tiêu hao nhiên liệu thực tế của dòng máy 100kVA tại các mức tải:</p>
        <ul class="list-disc list-inside ml-4 mt-2 mb-4">
            <li><strong>50% Tải:</strong> Khoảng 10 - 12 Lít/giờ.</li>
            <li><strong>75% Tải:</strong> Khoảng 14 - 16 Lít/giờ.</li>
            <li><strong>100% Tải:</strong> Khoảng 18 - 20 Lít/giờ.</li>
        </ul>
        <p class="bg-yellow-50 p-3 rounded border border-yellow-200 text-sm">
            <em>Lưu ý: Mức tiêu hao thực tế phụ thuộc vào tình trạng máy, chất lượng dầu diesel và điều kiện môi trường. VNGPOWER khuyến nghị sử dụng dầu Diesel 0.05S để bảo vệ động cơ tốt nhất.</em>
        </p>

        <h2 class="text-2xl font-bold text-navy-900 uppercase border-b pb-2 mt-10">5. QUY TRÌNH LẮP ĐẶT TIÊU CHUẨN</h2>
        <p>VNGPOWER cung cấp dịch vụ lắp đặt trọn gói ("Chìa khóa trao tay") cho khách hàng:</p>
        <ul class="space-y-4 mt-4">
            <li class="flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div><strong>Khảo sát miễn phí:</strong> Kỹ thuật viên đến tận nơi đo đạc công suất tiêu thụ thực tế, kiểm tra vị trí đặt máy, đường thoát khói, thoát gió.</div>
            </li>
            <li class="flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div><strong>Tư vấn & Báo giá:</strong> Lên phương án kỹ thuật tối ưu nhất (chọn dòng máy nào, làm phòng cách âm ra sao, ống khói thế nào) và báo giá chi tiết 3 option (Cao cấp, Trung cấp, Giá rẻ).</div>
            </li>
            <li class="flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div><strong>Sản xuất & Lắp đặt:</strong> Tiến hành lắp ráp máy tại nhà máy và thi công lắp đặt trọn gói tại công trình (cẩu máy, đấu nối cáp động lực, lắp tủ ATS).</div>
            </li>
            <li class="flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div><strong>Nghiệm thu & Bàn giao:</strong> Chạy thử tải 100% tại công trình, hướng dẫn vận hành cho nhân viên kỹ thuật của khách hàng và bàn giao hồ sơ hoàn công.</div>
            </li>
        </ul>
        
        <div class="mt-8 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl text-center shadow-inner">
            <h3 class="font-bold text-2xl text-navy-900 mb-4">BẠN CẦN TƯ VẤN CHUYÊN SÂU HƠN?</h3>
            <p class="mb-6 text-gray-600">Đừng ngần ngại, hãy gọi ngay cho kỹ sư trưởng của chúng tôi để được giải đáp mọi thắc mắc kỹ thuật về máy 100kVA.</p>
            <a href="tel:0901389998" class="inline-block bg-safety-500 text-navy-900 font-bold py-3 px-8 rounded hover:bg-safety-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">GỌI KỸ THUẬT: 0901 38 9998</a>
        </div>
      </div>
    `
  }
};
