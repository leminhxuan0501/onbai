(() => {
  const chapters = [
    { name: "Phân tích tính không chắc chắn", description: "Nguồn bất định, phân tích độ nhạy tất định và xác suất, cách diễn giải kết quả." },
    { name: "Ước tính chi phí & chi phí-hiệu quả", description: "Quan điểm, phân loại và đo lường chi phí; QALY, ICER và ngưỡng chi trả." },
    { name: "Nguồn dữ liệu & case study kinh tế dược", description: "Dữ liệu sơ cấp, thứ cấp và ứng dụng trong các nghiên cứu điều trị tăng huyết áp, loãng xương." },
    { name: "Phân tích tác động ngân sách", description: "Khung BIA 6 bước, quần thể đủ điều kiện, thị phần, chi phí và kết quả theo thời gian." },
    { name: "Chiến lược marketing nhà thuốc", description: "Định vị, marketing mix 12P, danh mục, trải nghiệm và chăm sóc khách hàng." },
    { name: "Kinh tế vi mô: Cung, cầu & thị trường", description: "Các yếu tố dịch chuyển cung cầu, cân bằng thị trường, thiếu hụt và dư thừa." },
    { name: "Kinh tế học đại cương & vĩ mô", description: "Khan hiếm, chi phí cơ hội, nguyên tắc kinh tế, GDP, lạm phát và thất nghiệp." },
    { name: "Đo lường hiệu quả marketing nhà thuốc", description: "Nhóm chỉ số tài chính, chuyển đổi, khách hàng, kênh và bài tập tính toán." },
    { name: "Các hình thức bán lẻ dược", description: "Nhà thuốc, quầy thuốc, tủ thuốc, bán lẻ lưu động và các yêu cầu chuyên môn." },
    { name: "Tổ chức & loại hình doanh nghiệp dược", description: "Đặc trưng tổ chức, cơ cấu quản trị và lựa chọn loại hình kinh doanh dược." }
  ];

  const facts = [
    [
      ["nguồn bất định", "Hiệu quả điều trị", "Có thể không chắc chắn do khoảng tin cậy của dữ liệu về hiệu lực và tính an toàn"],
      ["nguồn bất định", "Số liệu đầu vào", "Có thể đến từ nguy cơ nền, chi phí, thỏa dụng và các tham số khác"],
      ["nguồn bất định", "Cấu trúc mô hình", "Có thể phát sinh từ cách chọn trạng thái bệnh và các giả định trong mô hình"],
      ["nguồn bất định", "Thời gian đánh giá", "Khoảng 5 năm, 10 năm hay trọn đời có thể làm thay đổi kết quả"],
      ["nguồn bất định", "Tham số", "Giá trị đầu vào biến thiên và cần được đánh giá bằng phân tích độ nhạy"],
      ["bất định cấu trúc", "Trạng thái bệnh", "Thay đổi các trạng thái được mô tả trong mô hình có thể làm đổi kết quả"],
      ["bất định cấu trúc", "Giả định mô hình", "Cần nêu rõ và kiểm tra vì giả định khác nhau có thể ảnh hưởng kết luận"],
      ["bất định cấu trúc", "Mô hình cơ bản", "Là cấu trúc phân tích được dùng làm mốc để so sánh các lựa chọn thay thế"],
      ["bất định phương pháp", "Quan điểm nghiên cứu", "Quyết định loại chi phí nào được tính vào phân tích"],
      ["bất định phương pháp", "Tỷ lệ chiết khấu", "Có thể kiểm tra các mức khác nhau như 0%, 3% và 6%"],
      ["bất định phương pháp", "Loại chi phí", "Có thể kiểm tra riêng chi phí y tế trực tiếp và chi phí y tế gián tiếp"],
      ["phân tích tất định", "Độ nhạy một chiều", "Thay đổi từng tham số trong một khoảng giá trị, giữ các tham số khác ở giá trị cơ bản"],
      ["phân tích tất định", "Độ nhạy nhiều chiều", "Thay đổi đồng thời từ hai tham số trở lên để xem xét tác động kết hợp"],
      ["phân tích tất định", "Phân tích trường hợp cực trị", "Tính kết quả ICER trong trường hợp tốt nhất và xấu nhất của từng tham số"],
      ["phân tích tất định", "Giá trị cơ bản", "Các tham số không được thay đổi trong phân tích một chiều sẽ giữ ở mức này"],
      ["phân tích tất định", "Hạn chế của phân tích tất định", "Khó thể hiện tương tác giữa các tham số và có thể khó phiên giải kết luận"],
      ["phân tích xác suất", "PSA", "Cho nhiều tham số biến thiên đồng thời theo các phân phối xác suất được chọn"],
      ["phân tích xác suất", "Phân phối tham số", "Mô tả khoảng giá trị và xác suất của từng tham số đầu vào trong PSA"],
      ["phân tích xác suất", "Mô phỏng Monte Carlo", "Lặp lại mô hình nhiều lần bằng cách lấy mẫu các giá trị tham số"],
      ["phân tích xác suất", "10.000 lần mô phỏng", "Là số lần mô phỏng Monte Carlo được minh họa trong bài giảng"],
      ["diễn giải kết quả", "Biểu đồ phân tán", "Trình bày các kết quả chi phí và hiệu quả thu được từ PSA"],
      ["diễn giải kết quả", "Đường cong chấp nhận chi phí-hiệu quả", "Cho biết xác suất một can thiệp đạt chi phí-hiệu quả theo từng ngưỡng chi trả"],
      ["diễn giải kết quả", "Ngưỡng sẵn sàng chi trả", "Mức giá trị mà người ra quyết định chấp nhận trả thêm cho một đơn vị hiệu quả"],
      ["diễn giải kết quả", "Xác suất đạt chi phí-hiệu quả", "Có thể thay đổi khi ngưỡng chi trả thay đổi trên đường CEAC"],
      ["diễn giải kết quả", "Kết luận về tính bất định", "Cần xem xét độ vững của kết quả thay vì chỉ dựa vào một ước lượng cơ bản"]
    ],
    [
      ["quan điểm phân tích", "Quan điểm hệ thống y tế", "Tính các khoản chi phí mà hệ thống y tế phải chịu, như thuốc và nằm viện"],
      ["quan điểm phân tích", "Quan điểm bên chi trả", "Tập trung vào chi phí do cơ quan chi trả như quỹ bảo hiểm hoặc bệnh viện gánh chịu"],
      ["quan điểm phân tích", "Quan điểm xã hội", "Tính các chi phí và hậu quả bất kể cá nhân hay tổ chức nào phải gánh chịu"],
      ["quan điểm phân tích", "Quan điểm bệnh nhân", "Xem xét khoản chi phí do chính người bệnh trực tiếp thanh toán"],
      ["quan điểm phân tích", "Xác định quan điểm", "Phải xác định trước khi tính chi phí vì quan điểm quyết định khoản mục được đưa vào"],
      ["phân loại chi phí", "Chi phí trực tiếp y tế", "Gồm tiền thuốc, giường bệnh và chi phí khám chữa bệnh"],
      ["phân loại chi phí", "Chi phí trực tiếp phi y tế", "Gồm đi lại, ăn ở của bệnh nhân hoặc gia đình khi tiếp cận dịch vụ"],
      ["phân loại chi phí", "Chi phí gián tiếp", "Phản ánh mất năng suất lao động do bệnh tật hoặc thời gian nghỉ điều trị"],
      ["phân loại chi phí", "Chi phí vô hình", "Phản ánh đau đớn và chịu đựng, khó biểu hiện như khoản chi tiền trực tiếp"],
      ["phân loại chi phí", "Chi phí đi lại", "Được xếp vào chi phí trực tiếp phi y tế trong ví dụ bài giảng"],
      ["ước tính chi phí", "Đo lường nguồn lực", "Xác định lượng nguồn lực đã sử dụng trước khi định giá chúng"],
      ["ước tính chi phí", "Định giá nguồn lực", "Gán đơn giá phù hợp cho thuốc, lần khám, ngày nằm viện hoặc nguồn lực khác"],
      ["ước tính chi phí", "Tổng chi phí", "Được ước tính từ lượng nguồn lực sử dụng và đơn giá tương ứng"],
      ["ước tính chi phí", "Chi phí thuốc", "Có thể lấy từ giá trúng thầu hoặc giá thuốc kê khai theo ví dụ trong bài"],
      ["ước tính chi phí", "Chi phí khám định kỳ", "Có thể tính bằng số lần khám nhân với chi phí cho mỗi lần khám"],
      ["điều chỉnh chi phí", "Chiết khấu", "Đưa chi phí hoặc kết quả phát sinh ở các thời điểm khác nhau về cùng mốc thời gian"],
      ["điều chỉnh chi phí", "Chi phí tương lai", "Có thể được chiết khấu trong phân tích kéo dài nhiều năm theo hướng dẫn áp dụng"],
      ["điều chỉnh chi phí", "Phân tích độ nhạy tỷ lệ chiết khấu", "Kiểm tra xem kết luận có đổi khi dùng các tỷ lệ chiết khấu khác nhau hay không"],
      ["đo lường hiệu quả", "QALY", "Kết hợp thời gian sống với chất lượng cuộc sống, thường tính bằng thời gian nhân utility"],
      ["đo lường hiệu quả", "Utility", "Giá trị phản ánh chất lượng cuộc sống trong một khoảng thời gian điều trị"],
      ["đo lường hiệu quả", "ICER", "Tỷ số giữa chênh lệch chi phí và chênh lệch hiệu quả của hai lựa chọn"],
      ["đo lường hiệu quả", "Ngưỡng chi trả", "Được dùng để hỗ trợ diễn giải ICER trong bối cảnh ra quyết định cụ thể"],
      ["case tăng huyết áp", "Phương pháp A", "Có chi phí thuốc 600 USD/tháng, khám 50 USD/lần sáu lần/năm và quản lý biến chứng 1.000 USD/năm"],
      ["case tăng huyết áp", "Phương pháp B", "Có chi phí thuốc 200 USD/tháng, khám 50 USD/lần sáu lần/năm và quản lý biến chứng 3.000 USD/năm"],
      ["case tăng huyết áp", "Ngưỡng của tình huống", "Được giả định là 20.000 USD cho mỗi QALY trong bài tập"]
    ],
    [
      ["dữ liệu sơ cấp", "Khảo sát bệnh nhân", "Được người nghiên cứu thu thập trực tiếp để trả lời mục tiêu nghiên cứu cụ thể"],
      ["dữ liệu sơ cấp", "Phỏng vấn chuyên gia", "Là ví dụ về dữ liệu thu thập trực tiếp từ người có chuyên môn"],
      ["dữ liệu sơ cấp", "Quan sát tại cơ sở", "Có thể ghi nhận trực tiếp hoạt động thực tế tại nhà thuốc hoặc bệnh viện"],
      ["dữ liệu sơ cấp", "Ưu điểm dữ liệu sơ cấp", "Có thể phù hợp với mục tiêu cụ thể và cho phép kiểm soát cách thu thập"],
      ["dữ liệu sơ cấp", "Hạn chế dữ liệu sơ cấp", "Thường tốn thời gian, nguồn lực và có thể có phạm vi thu thập nhỏ"],
      ["dữ liệu thứ cấp", "Hồ sơ bệnh án", "Là dữ liệu đã được thu thập và lưu trữ, có thể khai thác lại"],
      ["dữ liệu thứ cấp", "Báo cáo bảo hiểm y tế", "Có thể cung cấp dữ liệu sẵn có về chi phí hoặc sử dụng dịch vụ"],
      ["dữ liệu thứ cấp", "Thử nghiệm lâm sàng đã công bố", "Là ví dụ về nguồn dữ liệu thứ cấp dùng lại từ nghiên cứu trước"],
      ["dữ liệu thứ cấp", "Ưu điểm dữ liệu thứ cấp", "Có thể tiết kiệm thời gian và chi phí thu thập"],
      ["dữ liệu thứ cấp", "Hạn chế dữ liệu thứ cấp", "Có thể không khớp hoàn toàn với câu hỏi nghiên cứu và phụ thuộc chất lượng nguồn"],
      ["nguồn dữ liệu case", "Giá thuốc", "Có thể tham khảo giá trúng thầu hoặc giá kê khai trên cổng thông tin của Bộ Y tế"],
      ["nguồn dữ liệu case", "Chi phí khám", "Có thể xác định từ phiếu khám, số lượt khám, tiền thuốc và xét nghiệm"],
      ["nguồn dữ liệu case", "Chi phí đi lại và ăn ở", "Có thể thu thập bằng phỏng vấn bệnh nhân hoặc người nhà"],
      ["nguồn dữ liệu case", "Utility", "Có thể được thu thập bằng bộ câu hỏi chất lượng cuộc sống cho bệnh nhân"],
      ["nguồn dữ liệu case", "Thời gian sống còn", "Có thể lấy từ thử nghiệm lâm sàng hoặc nghiên cứu quan sát"],
      ["case tăng huyết áp", "Hiệu quả phương pháp A", "Trong tình huống, utility là 0,85 mỗi năm và thời gian sống dự kiến là 15 năm"],
      ["case tăng huyết áp", "Hiệu quả phương pháp B", "Trong tình huống, utility là 0,75 mỗi năm và thời gian sống dự kiến là 10 năm"],
      ["case loãng xương", "Bisphosphonate", "Nhóm thuốc được xem xét trong phân tích chi phí-hiệu quả điều trị loãng xương"],
      ["case loãng xương", "Alendronate", "Được nêu với chi phí một năm 5.815.300 đồng trong bảng minh họa"],
      ["case loãng xương", "Zoledronic acid", "Được nêu với chi phí một năm 7.177.569 đồng trong bảng minh họa"],
      ["mô hình bệnh", "Trạng thái Markov", "Có thể gồm loãng xương, sau gãy xương đùi, sau gãy đốt sống và tử vong"],
      ["mô hình bệnh", "Xác suất chuyển trạng thái", "Mô tả khả năng người bệnh chuyển từ trạng thái hiện tại sang trạng thái khác"],
      ["mô hình bệnh", "Hiệu quả điều trị loãng xương", "Có thể đo bằng giảm xác suất gãy xương và tăng mật độ xương"],
      ["chất lượng bằng chứng", "Dữ liệu Việt Nam", "Được ưu tiên khi có chất lượng phù hợp với bối cảnh ra quyết định tại Việt Nam"],
      ["chất lượng bằng chứng", "Tổng quan hệ thống và phân tích gộp", "Được xếp ở mức bằng chứng cao trong nguyên tắc tìm kiếm dữ liệu của bài"]
    ],
    [
      ["khái niệm BIA", "Phân tích tác động ngân sách", "Ước tính hậu quả tài chính khi áp dụng can thiệp y tế mới trong bối cảnh chăm sóc cụ thể"],
      ["khái niệm BIA", "Tác động ngân sách", "Bằng chi phí kịch bản mới trừ chi phí kịch bản hiện tại"],
      ["khái niệm BIA", "Kịch bản hiện tại", "Mô tả chi phí điều trị với các phương pháp đang được sử dụng"],
      ["khái niệm BIA", "Kịch bản mới", "Mô tả chi phí sau khi đưa can thiệp hoặc thuốc mới vào sử dụng"],
      ["khái niệm BIA", "Quan điểm BIA", "Cần gắn với đơn vị lập ngân sách như quỹ bảo hiểm hoặc ngân sách bệnh viện"],
      ["khung ISPOR", "Bước xác định dân số", "Ước tính số người đủ điều kiện nhận can thiệp mới trong bối cảnh phân tích"],
      ["khung ISPOR", "Bước chọn khung thời gian", "Chọn số năm phù hợp với mục đích và chu kỳ lập ngân sách"],
      ["khung ISPOR", "Bước xác định phối hợp điều trị", "Ước tính thị phần các phác đồ trong kịch bản hiện tại và tương lai"],
      ["khung ISPOR", "Bước ước tính chi phí", "Tính chi phí điều trị hiện tại và tương lai cho từng phác đồ"],
      ["khung ISPOR", "Bước thay đổi chi phí liên quan bệnh", "Xem xét khoản tiết kiệm hoặc tăng thêm do thay đổi biến cố bệnh"],
      ["khung ISPOR", "Bước trình bày kết quả", "Báo cáo tác động ngân sách theo thời gian và cho bối cảnh chi trả đã chọn"],
      ["dân số BIA", "Dân số đủ điều kiện", "Được ước tính bằng cách lọc dần từ dân số chung qua dịch tễ, tiếp cận, điều trị và tiêu chí lâm sàng"],
      ["dân số BIA", "Tiêu chí Empagliflozin trong case", "Gồm HbA1c trên 7% dù đã dùng metformin và eGFR từ 45 mL/phút/1,73m²"],
      ["dân số BIA", "Nguồn quy mô dân số", "Có thể lấy từ số liệu dân số, dịch tễ và lượt khám ngoại trú"],
      ["dân số BIA", "Ý kiến chuyên gia", "Có thể hỗ trợ ước tính tỷ lệ bệnh nhân đủ điều kiện khi dữ liệu trực tiếp còn thiếu"],
      ["thị phần và chi phí", "Phối hợp điều trị", "Tổng các thị phần của những phác đồ trong cùng năm phải bằng 100%"],
      ["thị phần và chi phí", "Uptake thuốc mới", "Có thể tăng qua các năm khi mức độ làm quen và sử dụng thuốc thay đổi"],
      ["thị phần và chi phí", "Chi phí thuốc theo năm", "Có thể tính từ giá mỗi đơn vị, liều dùng và số ngày điều trị"],
      ["thị phần và chi phí", "Tăng trưởng dân số bệnh", "Làm số bệnh nhân và tác động ngân sách tương lai thay đổi"],
      ["thị phần và chi phí", "Khung thời gian case bệnh viện", "Được chọn ba năm để phù hợp chu kỳ lập kế hoạch ngân sách trong ví dụ"],
      ["phân biệt phương pháp", "BIA và CEA", "BIA hỏi tác động tài chính chi trả; CEA so sánh chi phí với hiệu quả sức khỏe"],
      ["phân biệt phương pháp", "CMA", "Có thể dùng khi các lựa chọn có hiệu quả tương đương và cần so sánh chi phí"],
      ["ví dụ BIA", "Kịch bản metformin", "100 bệnh nhân dùng 50.000 đồng/tháng/người tạo tổng chi phí 60 triệu đồng/năm"],
      ["ví dụ BIA", "Kịch bản thêm SGLT2i", "Nếu 20% trong 100 bệnh nhân dùng thuốc giá 300.000 đồng/tháng, tổng ví dụ là 120 triệu đồng/năm"],
      ["ví dụ BIA", "Tác động ví dụ SGLT2i", "Bằng 120 triệu trừ 60 triệu, tức tăng thêm 60 triệu đồng mỗi năm"]
    ],
    [
      ["marketing mix 12P", "Positioning", "Định vị mô hình kinh doanh và vị trí thương hiệu của nhà thuốc"],
      ["marketing mix 12P", "Product", "Xây dựng danh mục sản phẩm phù hợp khách hàng, mô hình và khu vực"],
      ["marketing mix 12P", "Price", "Quản trị giá minh bạch, chương trình ưu đãi và lợi nhuận"],
      ["marketing mix 12P", "Place", "Lựa chọn địa điểm và cách tiếp cận thuận tiện với khách hàng"],
      ["marketing mix 12P", "Promotion", "Truyền thông và khuyến mại trên các kênh phù hợp"],
      ["marketing mix 12P", "People", "Phát triển nhân sự và chất lượng tư vấn tại nhà thuốc"],
      ["marketing mix 12P", "Process", "Thiết kế quy trình phục vụ và chăm sóc khách hàng nhất quán"],
      ["marketing mix 12P", "Payment", "Tổ chức phương thức thanh toán thuận tiện cho khách hàng"],
      ["marketing mix 12P", "Partnership", "Phát triển quan hệ với đối tác và nhà cung cấp uy tín"],
      ["marketing mix 12P", "Personal branding", "Xây dựng thương hiệu cá nhân và uy tín chuyên môn của dược sĩ"],
      ["marketing mix 12P", "Personalization", "Cá nhân hóa tư vấn và trải nghiệm theo nhu cầu khách hàng"],
      ["marketing mix 12P", "Physical evidence", "Tạo nhận diện và bằng chứng hữu hình qua không gian, bảng hiệu, trưng bày"],
      ["định hướng khách hàng", "Product-centric", "Tập trung vào sản phẩm, tính năng và hoạt động bán thuốc"],
      ["định hướng khách hàng", "Customer-centric", "Tập trung vào nhu cầu, trải nghiệm và chăm sóc dài hạn"],
      ["định hướng khách hàng", "Phân khúc theo nhu cầu", "Nhóm khách hàng theo nhu cầu sức khỏe và đặc điểm thay vì chỉ theo sản phẩm"],
      ["định vị mô hình", "Nhà thuốc kết hợp phòng khám", "Là một trong các mô hình kinh doanh được bài giảng nêu"],
      ["định vị mô hình", "Tele-pharmacy", "Ứng dụng tư vấn hoặc dịch vụ dược từ xa trong mô hình nhà thuốc công nghệ"],
      ["chiến lược sản phẩm", "Danh mục cốt lõi", "Có thể ưu tiên nhóm sản phẩm đóng góp đáng kể vào kết quả kinh doanh"],
      ["chiến lược sản phẩm", "Danh mục theo mùa", "Điều chỉnh nhóm hàng theo nhu cầu như cảm cúm, tiêu hóa hoặc chống nắng"],
      ["chiến lược sản phẩm", "Nhà cung cấp", "Nên được lựa chọn dựa trên uy tín, nguồn gốc và chính sách hậu mãi"],
      ["chiến lược giá", "Minh bạch giá", "Niêm yết và đồng nhất giá giữa quầy thuốc với các kênh trực tuyến"],
      ["chiến lược giá", "Khuyến mại có mục tiêu", "Có thể dùng để xử lý tồn kho hoặc hàng cận hạn thay vì giảm giá tràn lan"],
      ["trải nghiệm khách hàng", "Thẻ thành viên", "Có thể hỗ trợ chăm sóc dài hạn, tích điểm và khuyến khích khách quay lại"],
      ["trải nghiệm khách hàng", "CRM", "Hỗ trợ lưu trữ và quản lý mối quan hệ với khách hàng"],
      ["trải nghiệm khách hàng", "Trải nghiệm mua sắm", "Có thể được cải thiện nhờ không gian mở, cá nhân hóa và tương tác tốt"]
    ],
    [
      ["khái niệm cầu", "Cầu", "Lượng hàng hóa người tiêu dùng sẵn lòng và có khả năng mua ở mỗi mức giá"],
      ["khái niệm cầu", "Lượng cầu", "Lượng hàng được mua tại một mức giá cụ thể trong điều kiện các yếu tố khác không đổi"],
      ["khái niệm cầu", "Thị hiếu", "Có thể làm thay đổi mức cầu khi sở thích hoặc mối quan tâm của người tiêu dùng đổi"],
      ["khái niệm cầu", "Thu nhập", "Là một yếu tố ngoài giá có thể làm đường cầu dịch chuyển"],
      ["khái niệm cầu", "Quy mô dân số", "Thay đổi về quy mô hoặc thành phần dân số có thể làm cầu thay đổi"],
      ["yếu tố cầu", "Giá hàng thay thế", "Giá của hàng hóa thay thế tăng có thể làm cầu đối với hàng hóa đang xét tăng"],
      ["yếu tố cầu", "Giá hàng bổ sung", "Giá của hàng hóa bổ sung tăng có thể làm cầu đối với hàng hóa đang xét giảm"],
      ["yếu tố cầu", "Đường cầu dịch chuyển phải", "Thể hiện nhu cầu tăng ở mỗi mức giá"],
      ["yếu tố cầu", "Thay đổi giá của chính hàng hóa", "Làm thay đổi lượng cầu dọc theo đường cầu, không tự nó dịch chuyển đường cầu"],
      ["yếu tố cầu", "Ceteris paribus", "Giả định các yếu tố khác không đổi khi phân tích quan hệ giữa giá và lượng cầu"],
      ["khái niệm cung", "Cung", "Lượng hàng hóa người bán sẵn lòng và có khả năng cung ứng ở mỗi mức giá"],
      ["khái niệm cung", "Chi phí sản xuất", "Giảm xuống có thể làm doanh nghiệp cung cấp nhiều hơn ở mỗi mức giá"],
      ["khái niệm cung", "Công nghệ sản xuất", "Tiến bộ có thể làm giảm chi phí và dịch chuyển đường cung sang phải"],
      ["khái niệm cung", "Giá đầu vào", "Tăng lên có thể làm chi phí cao hơn và giảm cung"],
      ["khái niệm cung", "Sự cố nhà máy", "Có thể làm giảm khả năng cung ứng và dịch chuyển đường cung sang trái"],
      ["cân bằng thị trường", "Giá cân bằng", "Là mức giá tại đó lượng cung bằng lượng cầu"],
      ["cân bằng thị trường", "Thiếu hụt", "Xảy ra khi lượng cầu lớn hơn lượng cung tại mức giá đang xét"],
      ["cân bằng thị trường", "Dư thừa", "Xảy ra khi lượng cung lớn hơn lượng cầu tại mức giá đang xét"],
      ["cân bằng thị trường", "Giá thấp hơn giá cân bằng", "Thường tạo ra thiếu hụt nếu các yếu tố khác không đổi"],
      ["cân bằng thị trường", "Giá cao hơn giá cân bằng", "Thường tạo ra dư thừa nếu các yếu tố khác không đổi"],
      ["chính sách giá", "Giá trần ràng buộc", "Được đặt dưới mức cân bằng và có thể tạo thiếu hụt"],
      ["chính sách giá", "Giá sàn ràng buộc", "Được đặt trên mức cân bằng và có thể tạo dư thừa"],
      ["thay đổi cân bằng", "Cầu tăng khi cung không đổi", "Thường làm giá cân bằng và lượng cân bằng tăng"],
      ["thay đổi cân bằng", "Cung tăng khi cầu không đổi", "Thường làm giá cân bằng giảm và lượng cân bằng tăng"],
      ["thay đổi cân bằng", "Cung giảm khi cầu không đổi", "Thường làm giá cân bằng tăng và lượng cân bằng giảm"]
    ],
    [
      ["khái niệm nền tảng", "Kinh tế học", "Nghiên cứu cách sử dụng nguồn lực hữu hạn để đáp ứng nhu cầu và mong muốn vô hạn"],
      ["khái niệm nền tảng", "Khan hiếm", "Phản ánh nguồn lực có hạn so với nhu cầu của con người"],
      ["khái niệm nền tảng", "Kinh tế vi mô", "Nghiên cứu lựa chọn của hộ gia đình, doanh nghiệp và các thị trường riêng lẻ"],
      ["khái niệm nền tảng", "Kinh tế vĩ mô", "Nghiên cứu nền kinh tế tổng thể qua GDP, tăng trưởng, lạm phát và thất nghiệp"],
      ["khái niệm nền tảng", "Kinh tế dược", "Đánh giá chi phí đầu vào và hiệu quả đầu ra trong kinh doanh, sử dụng thuốc"],
      ["10 nguyên tắc", "Đánh đổi", "Muốn có được một lựa chọn thường phải từ bỏ một lợi ích khác"],
      ["10 nguyên tắc", "Chi phí cơ hội", "Là giá trị lợi ích của lựa chọn tốt nhất bị từ bỏ"],
      ["10 nguyên tắc", "Quyết định cận biên", "So sánh lợi ích tăng thêm với chi phí tăng thêm của một thay đổi nhỏ"],
      ["10 nguyên tắc", "Phản ứng với kích thích", "Con người hoặc doanh nghiệp có thể đổi hành vi khi chi phí hay lợi ích thay đổi"],
      ["10 nguyên tắc", "Thương mại", "Có thể đem lại lợi ích nhờ chuyên môn hóa và trao đổi"],
      ["10 nguyên tắc", "Thị trường", "Giá cả truyền tín hiệu cung cầu và hỗ trợ phân bổ nguồn lực"],
      ["10 nguyên tắc", "Thất bại thị trường", "Có thể xuất hiện do độc quyền, thiếu thông tin hoặc tác động ngoại lai"],
      ["10 nguyên tắc", "Vai trò nhà nước", "Có thể điều tiết thị trường để khắc phục thất bại và hỗ trợ công bằng"],
      ["10 nguyên tắc", "Năng suất", "Là yếu tố quan trọng ảnh hưởng đến mức sống của một quốc gia"],
      ["10 nguyên tắc", "Đánh đổi vĩ mô ngắn hạn", "Chính phủ có thể đối mặt với sự đánh đổi giữa lạm phát và thất nghiệp"],
      ["chỉ số vĩ mô", "GDP", "Đo giá trị hàng hóa và dịch vụ cuối cùng được sản xuất trong một quốc gia trong một thời kỳ"],
      ["chỉ số vĩ mô", "GDP danh nghĩa", "Được tính theo giá hiện hành nên chịu ảnh hưởng của biến động giá"],
      ["chỉ số vĩ mô", "GDP thực", "Đã loại ảnh hưởng biến động giá và phù hợp hơn để xem tăng trưởng sản lượng"],
      ["chỉ số vĩ mô", "Tăng trưởng GDP", "Thường biểu thị phần trăm thay đổi GDP giữa các thời kỳ"],
      ["chỉ số vĩ mô", "Chu kỳ kinh tế", "Có thể gồm các giai đoạn mở rộng, ổn định, suy thoái và phục hồi"],
      ["chỉ số vĩ mô", "Lạm phát", "Là sự tăng liên tục của mức giá chung hàng hóa và dịch vụ theo thời gian"],
      ["chỉ số vĩ mô", "Tăng giá một mặt hàng", "Không nhất thiết là lạm phát chung nếu giá các hàng hóa khác không đổi"],
      ["chỉ số vĩ mô", "Thất nghiệp", "Tình trạng người có khả năng và nhu cầu làm việc nhưng không tìm được việc"],
      ["chỉ số vĩ mô", "Tỷ lệ thất nghiệp", "Được tính bằng số người thất nghiệp chia cho lực lượng lao động"],
      ["ngành dược", "Quyết định phân bổ ngân sách", "Cần cân nhắc chi phí cơ hội khi lựa chọn thuốc hoặc dịch vụ y tế"]
    ],
    [
      ["chỉ số tài chính", "Doanh thu thuần", "Doanh số thực tế sau khi trừ chiết khấu hoặc hàng bị trả lại"],
      ["chỉ số tài chính", "Giá trị đơn hàng trung bình", "Bằng tổng doanh thu chia cho tổng số hóa đơn"],
      ["chỉ số tài chính", "Lợi nhuận gộp", "Bằng doanh thu trừ giá vốn hàng bán"],
      ["chỉ số tài chính", "Vòng quay vốn lưu động", "Bằng doanh thu thuần chia vốn lưu động bình quân"],
      ["chỉ số tài chính", "Chi phí marketing", "Có thể gồm chi phí in ấn, quà tặng, nhân sự và chi phí cơ hội giảm giá"],
      ["chỉ số chuyển đổi", "Tỷ lệ chuyển đổi", "Bằng số hóa đơn thanh toán chia số lượt khách vào nhà thuốc"],
      ["chỉ số chuyển đổi", "Số lượt khách", "Là mẫu số thường dùng khi tính tỷ lệ chuyển đổi tại điểm bán"],
      ["chỉ số chuyển đổi", "Số hóa đơn", "Đại diện cho số giao dịch hoàn tất trong kỳ đo lường"],
      ["chỉ số chuyển đổi", "Tỷ lệ chốt đơn thấp", "Có thể cần quan sát quy trình tư vấn để tìm điểm nghẽn thực thi"],
      ["chỉ số chuyển đổi", "Chi phí thu hút khách hàng", "Giúp đánh giá chi phí bỏ ra để có thêm khách hàng mới"],
      ["hiệu quả chiến dịch", "Doanh thu trên chi phí quảng cáo", "So sánh doanh thu của nhóm hàng mục tiêu với khoản chi quảng cáo"],
      ["hiệu quả chiến dịch", "Lợi nhuận chiến dịch", "Cần trừ giá vốn và chi phí marketing khỏi doanh thu liên quan"],
      ["hiệu quả chiến dịch", "Điểm hòa vốn marketing", "Tính bằng chi phí marketing chia lợi nhuận gộp trên mỗi sản phẩm"],
      ["hiệu quả chiến dịch", "Doanh thu nhóm hàng", "Cần được tách riêng nếu muốn đánh giá một chiến dịch cho nhóm hàng cụ thể"],
      ["hiệu quả chiến dịch", "Đo trước và sau", "Cần xác định kỳ đo và nhóm chỉ số phù hợp với mục tiêu chiến dịch"],
      ["chỉ số khách hàng", "Tỷ lệ khách hàng quay lại", "Phản ánh khả năng duy trì quan hệ lâu dài với khách"],
      ["chỉ số khách hàng", "Giá trị vòng đời khách hàng", "Ước tính tổng số tiền khách hàng chi tiêu tại nhà thuốc theo thời gian"],
      ["chỉ số khách hàng", "Mức độ hài lòng", "Là thước đo trải nghiệm, niềm tin và chất lượng phục vụ"],
      ["chỉ số khách hàng", "Nguồn giới thiệu", "Giúp đánh giá việc khách hàng có giới thiệu nhà thuốc cho người khác hay không"],
      ["chỉ số kênh", "Hiệu quả kênh", "So sánh kết quả đơn hàng hoặc doanh thu giữa các kênh truyền thông"],
      ["quản trị chiến dịch", "Mục tiêu SMART", "Cụ thể, đo lường được và có thời hạn phù hợp"],
      ["quản trị chiến dịch", "Theo dõi hàng ngày", "Giúp phát hiện sớm mức lệch giữa doanh số thực tế và mục tiêu"],
      ["quản trị chiến dịch", "Quan sát tại quầy", "Giúp đánh giá kỹ năng tư vấn và việc tuân thủ kịch bản của nhân viên"],
      ["quản trị chiến dịch", "Phân bổ ngân sách ngắn hạn", "Có thể tập trung khuyến mại để tạo doanh số trong thời gian gần"],
      ["quản trị chiến dịch", "Phân bổ ngân sách dài hạn", "Có thể tập trung tư vấn, dịch vụ và uy tín để giữ chân khách"]
    ],
    [
      ["khái niệm bán lẻ", "Bán lẻ thuốc", "Cung cấp thuốc trực tiếp cho người sử dụng kèm tư vấn và hướng dẫn dùng an toàn"],
      ["khái niệm bán lẻ", "GPP", "Bộ nguyên tắc và tiêu chuẩn nhằm bảo đảm cơ sở bán lẻ cung ứng thuốc chất lượng"],
      ["hình thức bán lẻ", "Nhà thuốc", "Là một hình thức cơ sở bán lẻ thuốc theo nội dung bài giảng"],
      ["hình thức bán lẻ", "Quầy thuốc", "Có phạm vi hoạt động theo địa bàn và điều kiện được quy định trong tài liệu"],
      ["hình thức bán lẻ", "Tủ thuốc", "Có thể đặt tại trạm y tế ở một số địa bàn được nêu trong tài liệu"],
      ["nhân sự", "Người chịu trách nhiệm chuyên môn nhà thuốc", "Theo slide cần có bằng dược sĩ đại học và chứng chỉ hành nghề phù hợp"],
      ["nhân sự", "Người phụ trách chuyên môn quầy thuốc", "Theo slide cần có bằng trung cấp dược và chứng chỉ hành nghề phù hợp"],
      ["nhân sự", "Thời gian có mặt", "Người chịu trách nhiệm chuyên môn phải có mặt trong thời gian cơ sở hoạt động"],
      ["nhân sự", "Người bán lẻ trực tiếp", "Cần đáp ứng trình độ chuyên môn theo loại hình cơ sở và quy định áp dụng"],
      ["nhân sự", "Tư vấn thuốc kê đơn", "Theo slide, thông tin cho người mua phải do người có trách nhiệm chuyên môn cung cấp"],
      ["cơ sở vật chất", "Diện tích nhà thuốc", "Bài giảng nêu diện tích tối thiểu 10 m² và cần phù hợp quy mô"],
      ["cơ sở vật chất", "Bảo quản lạnh", "Cần phương tiện phù hợp với thuốc yêu cầu bảo quản ở nhiệt độ thấp"],
      ["cơ sở vật chất", "Phần mềm quản lý", "Hỗ trợ theo dõi nguồn gốc, hạn dùng và giá thuốc"],
      ["cơ sở vật chất", "Tủ thuốc ở vùng khó khăn", "Theo slide cần nơi thoáng, tránh nắng trực tiếp và theo dõi nhiệt độ, độ ẩm"],
      ["cơ sở vật chất", "Tách khu vực sản phẩm", "Mỹ phẩm và thực phẩm chức năng cần được phân biệt với khu vực thuốc theo hướng dẫn"],
      ["mua bán và tư vấn", "Nguồn mua thuốc", "Cơ sở bán lẻ chỉ mua từ nguồn hợp pháp và lưu đủ chứng từ theo bài giảng"],
      ["mua bán và tư vấn", "Hướng dẫn sử dụng", "Người bán lẻ cần hỏi thông tin và tư vấn cách dùng thuốc cho người mua"],
      ["mua bán và tư vấn", "Thay thế thuốc kê đơn", "Cần đáp ứng điều kiện về hoạt chất, đường dùng, liều lượng và sự đồng ý của người mua theo slide"],
      ["mua bán và tư vấn", "Tư vấn trực tuyến", "Bán lẻ trực tuyến cần có hình thức tư vấn và lưu bằng chứng theo thời hạn nêu trong bài"],
      ["mua bán và tư vấn", "Thuốc thu hồi", "Cần được biệt trữ để chờ xử lý thay vì tiếp tục bán"],
      ["phạm vi hoạt động", "Nhà thuốc", "Có địa bàn hoạt động rộng hơn quầy thuốc theo so sánh trong bài"],
      ["phạm vi hoạt động", "Quầy thuốc", "Có thể hoạt động ở một số xã, thị trấn và địa bàn được nêu trong tài liệu"],
      ["phạm vi hoạt động", "Tủ thuốc", "Bán thuốc thiết yếu phù hợp phân tuyến chuyên môn theo nội dung bài giảng"],
      ["phạm vi hoạt động", "Bán lẻ lưu động", "Được tổ chức bởi một số cơ sở đủ điều kiện để phục vụ địa bàn đặc thù"],
      ["tuân thủ", "Biển thông tin thực phẩm chức năng", "Cần tránh làm người mua hiểu nhầm sản phẩm không phải thuốc là thuốc chữa bệnh"]
    ],
    [
      ["đặc trưng tổ chức", "Mục tiêu", "Nên rõ ràng, đo lường được, khả thi và có thời hạn"],
      ["đặc trưng tổ chức", "Chức năng và nhiệm vụ", "Làm rõ tổ chức làm gì và thực hiện như thế nào"],
      ["đặc trưng tổ chức", "Cơ cấu tổ chức", "Xác định bộ phận và mối quan hệ giữa các bộ phận"],
      ["đặc trưng tổ chức", "Quyền lực", "Thể hiện thẩm quyền và phạm vi tác động trong tổ chức"],
      ["đặc trưng tổ chức", "Nguồn lực", "Bao gồm nhân lực, vật chất, tài chính và công nghệ"],
      ["đặc trưng tổ chức", "Môi trường", "Gồm yếu tố chính sách, thị trường và môi trường nội bộ"],
      ["cơ cấu tổ chức", "Cơ cấu trực tuyến", "Mệnh lệnh đi trực tiếp từ cấp trên xuống cấp dưới"],
      ["cơ cấu tổ chức", "Cơ cấu chức năng", "Chia bộ phận theo chuyên môn như sản xuất, kiểm nghiệm và kinh doanh"],
      ["cơ cấu tổ chức", "Cơ cấu trực tuyến-chức năng", "Lãnh đạo quyết định và các phòng chức năng tham mưu"],
      ["cơ cấu tổ chức", "Đảm bảo chất lượng", "Cần có vị trí đủ thẩm quyền để dừng lô thuốc không đạt yêu cầu"],
      ["loại hình kinh doanh", "Doanh nghiệp tư nhân", "Chủ doanh nghiệp chịu trách nhiệm bằng toàn bộ tài sản theo mô tả trong bài"],
      ["loại hình kinh doanh", "Công ty hợp danh", "Có thành viên hợp danh chịu trách nhiệm vô hạn theo nội dung bài giảng"],
      ["loại hình kinh doanh", "Công ty TNHH một thành viên", "Do một tổ chức hoặc cá nhân làm chủ sở hữu"],
      ["loại hình kinh doanh", "Công ty TNHH hai thành viên trở lên", "Có từ hai đến năm mươi thành viên theo Luật Doanh nghiệp được nêu trong bài"],
      ["loại hình kinh doanh", "Công ty cổ phần", "Vốn điều lệ được chia thành cổ phần và có tối thiểu ba cổ đông theo bài"],
      ["trách nhiệm và vốn", "Trách nhiệm hữu hạn", "Thường giới hạn trách nhiệm của chủ sở hữu trong phạm vi vốn góp"],
      ["trách nhiệm và vốn", "Trách nhiệm vô hạn", "Có thể khiến chủ thể chịu trách nhiệm bằng tài sản của mình theo quy định"],
      ["trách nhiệm và vốn", "Huy động vốn bằng cổ phần", "Là đặc điểm gắn với công ty cổ phần"],
      ["trách nhiệm và vốn", "Hộ kinh doanh", "Là hình thức kinh doanh phổ biến ở nhà thuốc nhỏ nhưng không phải doanh nghiệp"],
      ["trách nhiệm và vốn", "Hợp tác xã", "Là một hình thức tổ chức kinh doanh khác với các loại hình doanh nghiệp trong bài"],
      ["doanh nghiệp dược", "Điều kiện kinh doanh dược", "Ngoài đăng ký doanh nghiệp còn phải đáp ứng điều kiện chuyên ngành dược"],
      ["doanh nghiệp dược", "Chứng chỉ hành nghề dược", "Là yêu cầu chuyên môn áp dụng cho nhân sự ở các vị trí theo quy định"],
      ["doanh nghiệp dược", "Giá thuốc", "Là một khía cạnh chịu quản lý riêng trong hoạt động kinh doanh dược"],
      ["doanh nghiệp dược", "Tiêu chuẩn GxP", "Là nhóm tiêu chuẩn chất lượng phù hợp với loại hình hoạt động dược"],
      ["doanh nghiệp dược", "Nhà đầu tư nước ngoài", "Có giới hạn phân phối thuốc theo phần so sánh trong tài liệu"]
    ]
  ];

  const scenarios = [
    [
      { text: "Vận dụng: Một tham số đầu vào thay đổi trong khoảng hợp lý, còn các tham số khác giữ nguyên ở giá trị cơ bản. Phân tích nào phù hợp?", options: ["Độ nhạy một chiều", "PSA", "Phân tích ngân sách", "Phân tích thị phần"], correctIndex: 0 },
      { text: "Vận dụng: Nhà nghiên cứu nghi ngờ kết luận phụ thuộc vào thời hạn mô hình 5 năm hay trọn đời. Nên kiểm tra loại bất định nào?", options: ["Bất định về phương pháp", "Bất định do sai số nhập mã bệnh nhân", "Chỉ bất định về giá bán lẻ", "Không cần kiểm tra vì khung thời gian không ảnh hưởng"], correctIndex: 0 },
      { text: "Vận dụng: Mô hình có nhiều tham số liên quan và nhóm nghiên cứu muốn chúng biến thiên đồng thời theo phân phối. Nên dùng gì?", options: ["Phân tích độ nhạy xác suất", "Chỉ thay một tham số", "Chỉ báo cáo giá trị cơ bản", "Bỏ các tham số không chắc chắn"], correctIndex: 0 },
      { text: "Vận dụng: PSA tạo 10.000 kết quả chi phí-hiệu quả. Biểu đồ nào thích hợp để quan sát các cặp kết quả mô phỏng?", options: ["Biểu đồ phân tán", "Biểu đồ tổ chức", "Biểu đồ cơ cấu nhân sự", "Bảng tồn kho"], correctIndex: 0 },
      { text: "Vận dụng: Một thuốc có xác suất đạt chi phí-hiệu quả tăng khi ngưỡng chi trả tăng. Đường biểu diễn xác suất theo ngưỡng nên dùng là gì?", options: ["CEAC", "Đường cầu", "Đường cung", "Đường cong sống còn"], correctIndex: 0 },
      { text: "Vận dụng: ICER được tính ở trường hợp tốt nhất và xấu nhất cho từng tham số. Đây là phân tích nào?", options: ["Phân tích trường hợp cực trị", "PSA", "Phân tích ngân sách", "Phân tích một chiều theo thời gian"], correctIndex: 0 },
      { text: "Vận dụng: Phân tích tất định cho kết quả khác nhau khi thay đổi đồng thời chi phí và utility. Hạn chế nào được minh họa?", options: ["Tương tác giữa tham số khó được phản ánh đầy đủ", "Không thể thay đổi giá trị đầu vào", "Không thể tính ICER", "Không thể phân tích chi phí"], correctIndex: 0 },
      { text: "Vận dụng: Kết luận chính chỉ dựa trên một ước lượng base case dù nhiều tham số bất định. Bước nào nên bổ sung?", options: ["Đánh giá độ nhạy và báo cáo độ bất định", "Loại bỏ mọi tham số khác", "Chỉ tăng số chữ số thập phân", "Chỉ đổi tên mô hình"], correctIndex: 0 },
      { text: "Vận dụng: Nhóm phân tích muốn kiểm tra mức chiết khấu 0%, 3% và 6%. Đây là kiểm tra bất định thuộc nhóm nào?", options: ["Phương pháp", "Cấu trúc nhân sự", "Thị phần", "Chất lượng quảng cáo"], correctIndex: 0 },
      { text: "Vận dụng: CEAC cho thấy xác suất thuốc mới đạt chi phí-hiệu quả là 0,87 tại ngưỡng đã chọn. Cách hiểu phù hợp nhất là gì?", options: ["Trong mô phỏng, xác suất đạt tiêu chí tại ngưỡng đó là 87%", "Thuốc chắc chắn hiệu quả ở mọi ngưỡng", "ICER bằng 0,87", "87% bệnh nhân sẽ khỏi bệnh"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Quỹ BHYT quyết định danh mục thuốc chi trả và chỉ muốn tính khoản quỹ phải thanh toán. Nên chọn quan điểm nào?", options: ["Quan điểm bên chi trả", "Quan điểm xã hội", "Quan điểm nhà sản xuất", "Quan điểm người lao động"], correctIndex: 0 },
      { text: "Vận dụng: Bệnh nhân đi xe buýt đến bệnh viện và nghỉ làm một tuần. Hai khoản này lần lượt thuộc nhóm nào?", options: ["Trực tiếp phi y tế và gián tiếp", "Trực tiếp y tế và vô hình", "Vô hình và trực tiếp y tế", "Gián tiếp và trực tiếp y tế"], correctIndex: 0 },
      { text: "Vận dụng: Một thuốc có utility 0,8 trong 2 năm. Nếu không chiết khấu và utility giữ nguyên, QALY là bao nhiêu?", options: ["1,6", "0,4", "2,8", "8"], correctIndex: 0 },
      { text: "Vận dụng: Thuốc A tốn 8.500 USD/năm; thuốc B tốn 5.700 USD/năm. Cần xác định gì để tính ICER A so với B?", options: ["Chênh lệch hiệu quả giữa A và B", "Chỉ giá thuốc A", "Số nhân viên nghiên cứu", "Tỷ lệ khách quay lại"], correctIndex: 0 },
      { text: "Vận dụng: Mỗi bệnh nhân có 6 lần khám/năm, mỗi lần 50 USD. Chi phí khám hàng năm là bao nhiêu?", options: ["300 USD", "56 USD", "250 USD", "600 USD"], correctIndex: 0 },
      { text: "Vận dụng: Một phân tích xã hội chỉ tính tiền thuốc và bỏ chi phí đi lại, mất năng suất. Thiếu sót nào phù hợp nhất?", options: ["Có thể bỏ sót các chi phí phi y tế trực tiếp và gián tiếp", "Đã tính quá nhiều loại chi phí", "Chỉ thiếu chi phí vô hình", "Không thể dùng quan điểm xã hội"], correctIndex: 0 },
      { text: "Vận dụng: Chi phí điều trị phát sinh trong các năm tương lai được so sánh với chi phí hiện tại. Cần cân nhắc thao tác nào?", options: ["Chiết khấu về cùng mốc thời gian", "Cộng chi phí mà không xét thời điểm", "Chuyển chi phí thành thị phần", "Loại bỏ chi phí năm đầu"], correctIndex: 0 },
      { text: "Vận dụng: Bệnh viện chỉ so sánh tiền mua thuốc mà bỏ chi phí khám và quản lý biến chứng dù chúng khác nhau giữa phác đồ. Cần làm gì?", options: ["Xác định và đo lường đầy đủ nguồn lực liên quan theo quan điểm đã chọn", "Chỉ so sánh số viên thuốc", "Tính chi phí quảng cáo", "Bỏ qua quan điểm phân tích"], correctIndex: 0 },
      { text: "Vận dụng: Phương án A có chi phí tăng thêm 10 triệu đồng và hiệu quả tăng thêm 0,5 QALY so với B. ICER là bao nhiêu?", options: ["20 triệu đồng/QALY", "5 triệu đồng/QALY", "10 triệu đồng/QALY", "0,05 triệu đồng/QALY"], correctIndex: 0 },
      { text: "Vận dụng: ICER của một can thiệp thấp hơn ngưỡng chi trả đã chọn. Kết luận nào thận trọng và phù hợp?", options: ["Can thiệp có thể được xem là chi phí-hiệu quả theo ngưỡng và bối cảnh đó", "Can thiệp chắc chắn rẻ nhất trong mọi bối cảnh", "Không cần xem xét bất định", "Can thiệp không có hiệu quả lâm sàng"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Nhóm nghiên cứu muốn đo trực tiếp utility của bệnh nhân tăng huyết áp tại một bệnh viện Việt Nam. Nguồn nào phù hợp nhất?", options: ["Khảo sát bệnh nhân bằng bộ câu hỏi chất lượng cuộc sống", "Chỉ dùng giá thuốc trúng thầu", "Báo cáo doanh số từ nhà sản xuất", "Một mô hình tổ chức doanh nghiệp"], correctIndex: 0 },
      { text: "Vận dụng: Nhóm nghiên cứu cần nhanh dữ liệu hồ sơ bệnh án đã lưu để đánh giá sử dụng dịch vụ. Đây là dữ liệu gì?", options: ["Dữ liệu thứ cấp", "Dữ liệu sơ cấp", "Ý kiến quảng cáo", "Dữ liệu không thể sử dụng"], correctIndex: 0 },
      { text: "Vận dụng: Một nghiên cứu cần số tiền bệnh nhân chi cho đi lại, ăn và ở trong quá trình điều trị. Cách thu thập nào được nêu trong case?", options: ["Phỏng vấn bệnh nhân hoặc gia đình", "Chỉ tra hồ sơ thuốc trúng thầu", "Chỉ lấy kết quả thử nghiệm lâm sàng", "Đếm số nhà thuốc trong khu vực"], correctIndex: 0 },
      { text: "Vận dụng: Bệnh viện muốn ước tính hiệu quả sống còn dài hạn nhưng thử nghiệm chỉ theo dõi ngắn. Nguồn nào có thể bổ sung theo bài giảng?", options: ["Nghiên cứu quan sát", "Bảng giá bán lẻ", "Phỏng vấn nhà cung cấp", "Báo cáo quảng cáo"], correctIndex: 0 },
      { text: "Vận dụng: Dữ liệu thứ cấp có quy mô lớn nhưng được thu thập cho mục tiêu khác. Trước khi dùng, cần làm gì?", options: ["Đánh giá chất lượng và mức phù hợp với câu hỏi hiện tại", "Giả định dữ liệu luôn chính xác", "Bỏ qua cách thu thập ban đầu", "Chỉ chọn kết quả thuận lợi"], correctIndex: 0 },
      { text: "Vận dụng: Nghiên cứu loãng xương muốn theo dõi chuyển tiếp giữa gãy xương đùi, trạng thái sau gãy và tử vong. Mô hình nào được trình bày trong slide?", options: ["Mô hình Markov", "Mô hình marketing mix", "Mô hình đường cầu", "Mô hình cơ cấu tổ chức"], correctIndex: 0 },
      { text: "Vận dụng: Nhóm nghiên cứu có ít dữ liệu trong nước và cần ưu tiên nguồn có bằng chứng tổng hợp chất lượng cao. Loại tài liệu nào được bài giảng ưu tiên?", options: ["Tổng quan hệ thống hoặc phân tích gộp", "Bài quảng cáo sản phẩm", "Ý kiến một khách hàng", "Bảng giá của một nhà thuốc"], correctIndex: 0 },
      { text: "Vận dụng: Cần tính chi phí thuốc trong nghiên cứu tăng huyết áp ở Việt Nam. Nguồn nào được nêu trong bài?", options: ["Giá thuốc trúng thầu hoặc giá kê khai", "Số lượt khách xem quảng cáo", "Tỷ lệ chuyển đổi tại nhà thuốc", "Số lượng cổ đông công ty"], correctIndex: 0 },
      { text: "Vận dụng: Nhóm nghiên cứu đánh giá alendronate và zoledronic acid cho loãng xương. Kết quả nào phù hợp để mô hình hóa hiệu quả theo slide?", options: ["Xác suất gãy xương và mật độ xương", "Tỷ lệ khách mua combo", "Số lượng nhân viên bán hàng", "Giá trị đơn hàng trung bình"], correctIndex: 0 },
      { text: "Vận dụng: Cần ước tính tỷ lệ bệnh nhân đủ điều kiện dùng thuốc mới nhưng hồ sơ chưa ghi đầy đủ tiêu chí. Nguồn nào có thể hỗ trợ theo case BIA/CEA?", options: ["Ý kiến chuyên gia y tế được thu thập phù hợp", "Chỉ số lượt xem trên mạng xã hội", "Bảng phân loại doanh nghiệp", "Tỷ lệ thất nghiệp toàn quốc"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Bệnh viện cần biết số tiền bổ sung nếu thêm thuốc mới vào danh mục trong ba năm tới. Phân tích phù hợp nhất là gì?", options: ["BIA", "CEA", "CMA", "Phân tích độ nhạy một chiều"], correctIndex: 0 },
      { text: "Vận dụng: Một mô hình BIA ước tính dân số chung, tỷ lệ mắc bệnh, tỷ lệ đến bệnh viện và tỷ lệ đủ điều kiện. Đây thuộc bước nào?", options: ["Xác định dân số đủ điều kiện", "Chọn ngưỡng chi trả", "Tính QALY", "Chọn cơ cấu tổ chức"], correctIndex: 0 },
      { text: "Vận dụng: Tổng chi phí kịch bản hiện tại là 60 triệu đồng, kịch bản mới là 120 triệu đồng. Tác động ngân sách là bao nhiêu?", options: ["Tăng 60 triệu đồng", "Giảm 60 triệu đồng", "Tăng 180 triệu đồng", "Không thay đổi"], correctIndex: 0 },
      { text: "Vận dụng: Dân số bệnh dự kiến tăng 3% mỗi năm. Khi lập BIA nhiều năm, nên xử lý thế nào?", options: ["Dự báo quy mô dân số theo từng năm", "Giữ nguyên số bệnh nhân mà không nêu giả định", "Chỉ dùng dân số năm cuối", "Chuyển mức tăng thành tỷ lệ chiết khấu"], correctIndex: 0 },
      { text: "Vận dụng: Thị phần các phác đồ trong năm đầu cộng lại chỉ bằng 90%. Cần kiểm tra điều gì?", options: ["Có phác đồ hoặc nhóm bệnh nhân chưa được tính để tổng thị phần đạt 100%", "BIA không cần tổng thị phần", "Tăng mọi tỷ lệ thêm 10 điểm phần trăm", "Bỏ kịch bản hiện tại"], correctIndex: 0 },
      { text: "Vận dụng: Giá thuốc là 15.000 đồng/viên, liều 1 viên/ngày trong 365 ngày. Chi phí thuốc năm cho một bệnh nhân là bao nhiêu?", options: ["5.475.000 đồng", "547.500 đồng", "15.365 đồng", "1.500.000 đồng"], correctIndex: 0 },
      { text: "Vận dụng: Bệnh viện dùng ngân sách dược làm góc nhìn và chỉ muốn biết khoản chi của bệnh viện. Chọn quan điểm nào?", options: ["Quan điểm ngân sách bệnh viện", "Quan điểm xã hội", "Quan điểm nhà sản xuất", "Quan điểm người lao động"], correctIndex: 0 },
      { text: "Vận dụng: Thuốc mới giảm biến chứng, nhờ đó có thể giảm chi phí điều trị biến chứng. Bước BIA nào cần tính đến khoản thay đổi này?", options: ["Ước tính thay đổi chi phí liên quan đến bệnh", "Chọn tên thuốc", "Xác định mô hình marketing", "Phân loại công ty"], correctIndex: 0 },
      { text: "Vận dụng: Hội đồng muốn biết thuốc nào tạo thêm hiệu quả sức khỏe với mức chi phí nào. Phân tích nào trả lời trực tiếp hơn BIA?", options: ["CEA", "BIA", "Phân tích dòng tiền", "Phân tích thị trường"], correctIndex: 0 },
      { text: "Vận dụng: Thị phần thuốc mới dự kiến tăng từ 7% năm 1 lên 16% năm 2 và 24% năm 3. Khi tính BIA, cần làm gì?", options: ["Áp dụng tỷ lệ uptake tương ứng cho từng năm", "Dùng 24% cho mọi năm", "Bỏ các phác đồ hiện tại", "Coi các tỷ lệ là xác suất tử vong"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Một nhà thuốc muốn phục vụ chủ yếu khách cao tuổi mắc bệnh mạn tính trong khu vực. Việc xác định mô hình và vị thế thuộc P nào?", options: ["Positioning", "Payment", "Physical evidence", "Partnership"], correctIndex: 0 },
      { text: "Vận dụng: Khu vực có nhiều gia đình trẻ và nhu cầu mẹ-bé cao. Điều chỉnh danh mục sản phẩm phù hợp nhất thuộc P nào?", options: ["Product", "Process", "Promotion", "People"], correctIndex: 0 },
      { text: "Vận dụng: Giá trên kệ khác giá trên website khiến khách mất niềm tin. P nào cần được cải thiện?", options: ["Price", "Place", "Partnership", "Personal branding"], correctIndex: 0 },
      { text: "Vận dụng: Khách hàng ở xa cần đặt mua và được tư vấn trực tuyến. Yếu tố nào cần được xem xét trong lựa chọn mô hình và kênh?", options: ["Place", "Physical evidence", "People", "Price"], correctIndex: 0 },
      { text: "Vận dụng: Nhân viên tư vấn chưa đồng đều giữa các ca. Nhà thuốc cần đào tạo và chuẩn hóa đội ngũ theo P nào?", options: ["People", "Product", "Payment", "Positioning"], correctIndex: 0 },
      { text: "Vận dụng: Nhà thuốc thiết kế kịch bản chào hỏi, hỏi nhu cầu, tư vấn và dặn dò sau bán. Đây là trọng tâm của P nào?", options: ["Process", "Price", "Place", "Partnership"], correctIndex: 0 },
      { text: "Vận dụng: Khách muốn thanh toán nhanh qua nhiều phương thức. P nào phản ánh nội dung này?", options: ["Payment", "Product", "Positioning", "People"], correctIndex: 0 },
      { text: "Vận dụng: Nhà thuốc hợp tác với nhà cung cấp đáng tin cậy để ổn định nguồn hàng và hậu mãi. P nào phù hợp?", options: ["Partnership", "Promotion", "Personalization", "Price"], correctIndex: 0 },
      { text: "Vận dụng: Dược sĩ chia sẻ kiến thức chuyên môn nhất quán để xây dựng niềm tin cá nhân. P nào được nhấn mạnh?", options: ["Personal branding", "Physical evidence", "Place", "Payment"], correctIndex: 0 },
      { text: "Vận dụng: Một nhà thuốc hiểu nhóm bệnh phổ biến, khả năng chi trả và chọn danh mục theo khu vực. Cách tiếp cận nào được thể hiện?", options: ["Customer-centric", "Chỉ tập trung sản phẩm", "Chỉ giảm giá", "Không phân khúc khách hàng"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Giá của một thuốc thay thế tăng, trong khi các yếu tố khác không đổi. Điều gì có khả năng xảy ra với cầu thuốc đang xét?", options: ["Cầu tăng", "Cầu giảm", "Cung giảm", "Lượng cung giảm"], correctIndex: 0 },
      { text: "Vận dụng: Giá của một mặt hàng bổ sung tăng. Nếu các yếu tố khác không đổi, cầu cho hàng hóa đang xét thường thế nào?", options: ["Giảm", "Tăng", "Cung tăng", "Không thể thay đổi"], correctIndex: 0 },
      { text: "Vận dụng: Giá bán của chính một sản phẩm tăng, không có yếu tố nào khác đổi. Thay đổi nào được mô tả?", options: ["Di chuyển dọc theo đường cầu", "Đường cầu chắc chắn dịch phải", "Đường cung dịch phải", "Cầu thị trường biến mất"], correctIndex: 0 },
      { text: "Vận dụng: Công nghệ giúp nhà sản xuất giảm chi phí ở mọi mức giá. Đường cung có xu hướng dịch chuyển thế nào?", options: ["Sang phải", "Sang trái", "Đường cầu dịch trái", "Không thể dịch chuyển"], correctIndex: 0 },
      { text: "Vận dụng: Một nhà máy bị hư hại và tạm ngừng sản xuất. Tác động trực tiếp phù hợp nhất là gì?", options: ["Cung giảm, đường cung dịch trái", "Cầu tăng, đường cầu dịch phải", "Cung tăng, đường cung dịch phải", "Lượng cầu tăng dọc đường cầu"], correctIndex: 0 },
      { text: "Vận dụng: Giá thị trường thấp hơn mức cân bằng. Nếu không có kiểm soát khác, trạng thái nào thường xuất hiện?", options: ["Thiếu hụt", "Dư thừa", "Cân bằng chắc chắn", "Cung bằng không"], correctIndex: 0 },
      { text: "Vận dụng: Giá được áp trần thấp hơn giá cân bằng. Hệ quả có khả năng xảy ra là gì?", options: ["Lượng cầu vượt lượng cung", "Lượng cung vượt lượng cầu", "Cầu và cung đều bằng không", "Giá cân bằng tự động tăng"], correctIndex: 0 },
      { text: "Vận dụng: Thu nhập người tiêu dùng tăng làm cầu xe tăng, trong khi cung không đổi. Giá và lượng cân bằng thường thay đổi ra sao?", options: ["Cả giá và lượng cân bằng tăng", "Giá giảm, lượng tăng", "Giá tăng, lượng giảm", "Cả hai giảm"], correctIndex: 0 },
      { text: "Vận dụng: Nguồn cung một hàng hóa tăng, cầu không đổi. Kết quả cân bằng thường là gì?", options: ["Giá giảm, lượng tăng", "Giá tăng, lượng giảm", "Cả giá và lượng giảm", "Cả giá và lượng tăng"], correctIndex: 0 },
      { text: "Vận dụng: Mưa đá làm nhiều nhà cần sơn lại, đồng thời làm một số nhà máy sơn ngừng hoạt động. Cần phân tích thế nào?", options: ["Cầu tăng và cung giảm; tác động ròng lên giá phụ thuộc độ lớn từng dịch chuyển", "Chỉ cầu giảm", "Chỉ cung tăng", "Giá và lượng chắc chắn đều giảm"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Bệnh viện chọn mua kho lạnh thay vì mở rộng ICU. Lợi ích của lựa chọn tốt nhất bị từ bỏ là gì?", options: ["Chi phí cơ hội", "GDP danh nghĩa", "Lạm phát", "Lượng cầu"], correctIndex: 0 },
      { text: "Vận dụng: Một nhà thuốc cân nhắc thuê thêm dược sĩ. Doanh thu tăng thêm được so với chi phí tiền lương tăng thêm. Đây là quyết định nào?", options: ["Quyết định cận biên", "Chi phí chìm", "GDP thực", "Giá trần"], correctIndex: 0 },
      { text: "Vận dụng: Trợ cấp BHYT làm người bệnh giảm khoản phải trả và số người nhận thuốc tăng. Nguyên tắc nào được minh họa?", options: ["Con người phản ứng với kích thích", "Thị trường luôn hoàn hảo", "Năng suất không đổi", "Cung không phụ thuộc giá"], correctIndex: 0 },
      { text: "Vận dụng: Một doanh nghiệp chuyên sản xuất kháng sinh, doanh nghiệp khác chuyên phân phối thuốc. Trao đổi giữa họ có thể đem lại lợi ích nhờ điều gì?", options: ["Chuyên môn hóa và thương mại", "Lạm phát cục bộ", "Giảm năng suất", "Giá sàn"], correctIndex: 0 },
      { text: "Vận dụng: Thị trường thuốc có độc quyền và người mua thiếu thông tin về chất lượng. Vấn đề nào cần xem xét?", options: ["Thất bại thị trường", "Cân bằng hoàn hảo", "GDP thực", "Chi phí trực tiếp"], correctIndex: 0 },
      { text: "Vận dụng: Nhà nước yêu cầu kê khai giá thuốc và kiểm soát bán thuốc kê đơn. Vai trò nào được minh họa?", options: ["Điều tiết thị trường", "Thay đổi sở thích người mua", "Tạo chi phí cơ hội bằng không", "Tăng cung tự động"], correctIndex: 0 },
      { text: "Vận dụng: GDP danh nghĩa tăng chủ yếu vì mức giá chung tăng. Chỉ số nào phù hợp hơn để đánh giá tăng trưởng sản lượng?", options: ["GDP thực", "GDP danh nghĩa", "Chỉ số giá riêng một thuốc", "Doanh thu nhà thuốc"], correctIndex: 0 },
      { text: "Vận dụng: Giá thuốc nhập khẩu tăng cùng nhiều nhóm hàng hóa khác trong thời gian dài. Hiện tượng nào cần xem xét?", options: ["Lạm phát", "Chỉ thay đổi lượng cầu một thuốc", "Chi phí vô hình", "Thất nghiệp tự nguyện"], correctIndex: 0 },
      { text: "Vận dụng: Người đang có khả năng lao động và tích cực tìm việc nhưng chưa tìm được công việc. Theo định nghĩa bài giảng, người này thuộc nhóm nào?", options: ["Thất nghiệp", "Ngoài lực lượng lao động chắc chắn", "Người có việc làm", "Người thất nghiệp chỉ khi không tìm việc"], correctIndex: 0 },
      { text: "Vận dụng: Ngân sách y tế có hạn nên không thể chi trả mọi thuốc theo nhu cầu. Khái niệm nào giải thích yêu cầu phải lựa chọn?", options: ["Khan hiếm nguồn lực", "Thị trường không có giá", "Cung vô hạn", "Không có chi phí cơ hội"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Trong tuần có 500 lượt khách và 400 hóa đơn. Tỷ lệ chuyển đổi là bao nhiêu?", options: ["80%", "20%", "125%", "8%"], correctIndex: 0 },
      { text: "Vận dụng: Doanh thu 60 triệu đồng từ 400 hóa đơn. Giá trị đơn hàng trung bình là bao nhiêu?", options: ["150.000 đồng", "15.000 đồng", "240.000 đồng", "600.000 đồng"], correctIndex: 0 },
      { text: "Vận dụng: Một nhóm hàng có doanh thu 15 triệu, giá vốn 9 triệu và chiến dịch tốn 3 triệu. Lợi nhuận chiến dịch trước chi phí vận hành là bao nhiêu?", options: ["3 triệu đồng", "6 triệu đồng", "9 triệu đồng", "12 triệu đồng"], correctIndex: 0 },
      { text: "Vận dụng: Một sản phẩm bán 300.000 đồng, giá vốn 200.000 đồng. Quảng cáo tốn 2 triệu đồng. Cần bán bao nhiêu sản phẩm để bù đúng chi phí quảng cáo?", options: ["20 sản phẩm", "10 sản phẩm", "30 sản phẩm", "50 sản phẩm"], correctIndex: 0 },
      { text: "Vận dụng: Doanh thu thuần là 120 triệu đồng và vốn lưu động bình quân là 30 triệu đồng. Vòng quay vốn lưu động là bao nhiêu?", options: ["4 vòng", "0,25 vòng", "90 vòng", "150 vòng"], correctIndex: 0 },
      { text: "Vận dụng: Một chiến dịch đặt mục tiêu tăng 20% doanh số nhóm tim mạch trong tháng 10. Mục tiêu này tốt hơn mục tiêu “tăng doanh thu thật nhiều” vì sao?", options: ["Cụ thể, đo lường được và có thời hạn", "Không cần số liệu", "Không có nhóm khách hàng", "Không liên quan kết quả"], correctIndex: 0 },
      { text: "Vận dụng: Doanh số thấp dù lượng khách vào quầy không giảm. Chỉ số nào giúp kiểm tra tỷ lệ khách hoàn tất giao dịch?", options: ["Tỷ lệ chuyển đổi", "Vòng quay vốn", "Giá vốn", "Giá trị vòng đời"], correctIndex: 0 },
      { text: "Vận dụng: Chi phí marketing tăng nhưng lợi nhuận nhóm hàng không tăng. Nên xem xét dữ liệu nào trước?", options: ["Doanh thu và giá vốn của nhóm hàng mục tiêu cùng chi phí chiến dịch", "Chỉ tổng số nhân viên", "Chỉ số GDP", "Số lượng kệ trưng bày không liên quan"], correctIndex: 0 },
      { text: "Vận dụng: Một nhà thuốc muốn biết khách biết đến mình từ bản đồ trực tuyến hay tờ rơi. Nhóm chỉ số nào phù hợp?", options: ["Hiệu quả kênh", "Chi phí vô hình", "Thị phần thuốc", "Cơ cấu tổ chức"], correctIndex: 0 },
      { text: "Vận dụng: Báo cáo cho thấy nhân viên quên giới thiệu quà tặng trong kịch bản nên tỷ lệ chốt combo thấp. Hành động phù hợp nhất là gì?", options: ["Quan sát, nhắc và đào tạo lại quy trình tại quầy", "Tăng giá mọi sản phẩm", "Ngừng theo dõi số liệu", "Chỉ tăng số lượt khách mục tiêu"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Người bệnh cần mua thuốc trực tiếp kèm tư vấn cách dùng. Loại hoạt động nào được mô tả?", options: ["Bán lẻ thuốc", "Sản xuất thuốc", "Kiểm nghiệm lô", "Bán nguyên liệu làm thuốc"], correctIndex: 0 },
      { text: "Vận dụng: Một cơ sở muốn có địa bàn hoạt động rộng, người phụ trách chuyên môn là dược sĩ đại học và có chứng chỉ phù hợp. Mô hình nào gần nhất với mô tả trong bài?", options: ["Nhà thuốc", "Tủ thuốc", "Quầy thuốc ở mọi địa bàn", "Cơ sở bán thiết bị y tế"], correctIndex: 0 },
      { text: "Vận dụng: Một quầy thuốc ở vùng được phép hoạt động cần người chịu trách nhiệm chuyên môn theo slide. Trình độ nào được nêu?", options: ["Trung cấp ngành dược và chứng chỉ hành nghề phù hợp", "Không cần bằng cấp", "Chỉ cần chứng chỉ kế toán", "Bằng marketing"], correctIndex: 0 },
      { text: "Vận dụng: Thuốc cần bảo quản lạnh 2–8°C được nhập về. Cơ sở cần ưu tiên điều gì?", options: ["Có phương tiện bảo quản phù hợp và theo dõi điều kiện", "Đặt gần cửa sổ có nắng", "Để chung khu thực phẩm", "Tắt tủ lạnh ngoài giờ"], correctIndex: 0 },
      { text: "Vận dụng: Một cơ sở bán trực tuyến thuốc và tư vấn qua tin nhắn. Theo bài giảng, cần làm gì với tư vấn?", options: ["Lưu bằng chứng tư vấn theo thời hạn được nêu", "Không cần lưu lại", "Chỉ gửi quảng cáo", "Xóa ngay sau khi giao hàng"], correctIndex: 0 },
      { text: "Vận dụng: Nhà thuốc nhận được thông báo thu hồi một thuốc. Hành động phù hợp là gì?", options: ["Biệt trữ thuốc để chờ xử lý", "Tiếp tục bán đến hết hàng", "Chuyển sang quầy mỹ phẩm", "Gỡ nhãn rồi bán"], correctIndex: 0 },
      { text: "Vận dụng: Khách xin thay thuốc kê đơn bằng sản phẩm khác. Theo nội dung bài, yếu tố nào cần có?", options: ["Cùng hoạt chất, đường dùng, liều lượng và sự đồng ý của người mua theo quy định", "Chỉ cần giá thấp hơn", "Chỉ cần bao bì giống", "Không cần người có chuyên môn"], correctIndex: 0 },
      { text: "Vận dụng: Cơ sở trưng bày thực phẩm chức năng cạnh thuốc kê đơn mà không phân biệt. Rủi ro nào cần khắc phục?", options: ["Người mua có thể hiểu nhầm sản phẩm không phải thuốc là thuốc", "Tăng nhiệt độ bảo quản thuốc", "Giảm số lượt khách", "Làm thay đổi phạm vi hành nghề"], correctIndex: 0 },
      { text: "Vận dụng: Một tủ thuốc đặt ở xã vùng khó khăn cần theo dõi nhiệt độ và độ ẩm. Thiết bị nào phù hợp?", options: ["Nhiệt kế và ẩm kế", "Máy đo doanh số", "Máy quét mã khách hàng", "Thiết bị định vị"], correctIndex: 0 },
      { text: "Vận dụng: Người mua cần thông tin về thuốc kê đơn tại quầy thuốc. Ai nên cung cấp thông tin chuyên môn theo slide?", options: ["Người chịu trách nhiệm chuyên môn về dược", "Bất kỳ người giao hàng nào", "Khách hàng khác", "Nhân viên không có chuyên môn"], correctIndex: 0 }
    ],
    [
      { text: "Vận dụng: Một dược sĩ mở nhà thuốc nhỏ, một cửa hàng và muốn tự chịu trách nhiệm bằng tài sản cá nhân. Nên cân nhắc đặc điểm của loại hình nào?", options: ["Doanh nghiệp tư nhân", "Công ty cổ phần", "Công ty TNHH", "Hợp tác xã"], correctIndex: 0 },
      { text: "Vận dụng: Ba người cùng góp vốn lập công ty, muốn giới hạn trách nhiệm trong phạm vi vốn góp và không phát hành cổ phiếu. Loại hình nào phù hợp hơn?", options: ["Công ty TNHH", "Doanh nghiệp tư nhân", "Hộ kinh doanh", "Công ty cổ phần"], correctIndex: 0 },
      { text: "Vận dụng: Doanh nghiệp dược cần huy động vốn từ nhiều cổ đông và chia vốn thành cổ phần. Loại hình nào phù hợp?", options: ["Công ty cổ phần", "Doanh nghiệp tư nhân", "Quầy thuốc", "Tủ thuốc"], correctIndex: 0 },
      { text: "Vận dụng: Nhà thuốc gia đình nhỏ không có kế hoạch mở rộng thành công ty. Bài giảng cho biết hình thức nào thường gặp?", options: ["Hộ kinh doanh", "Công ty cổ phần niêm yết", "Công ty hợp danh bắt buộc", "Tập đoàn đa quốc gia"], correctIndex: 0 },
      { text: "Vận dụng: Công ty dược cần bộ phận kiểm nghiệm độc lập với sản xuất để có thẩm quyền phát hiện lô không đạt. Nguyên tắc tổ chức nào quan trọng?", options: ["Phân định chức năng và thẩm quyền phù hợp", "Gộp mọi trách nhiệm vào bán hàng", "Bỏ cơ cấu tổ chức", "Để bộ phận sản xuất tự duyệt mọi lô"], correctIndex: 0 },
      { text: "Vận dụng: Một tổ chức có tên, tài sản, trụ sở nhưng không nhằm mục đích kinh doanh. Theo định nghĩa trên slide, yếu tố nào còn thiếu để là doanh nghiệp?", options: ["Mục đích kinh doanh", "Cơ cấu nhân sự", "Mã sản phẩm", "Chiến dịch marketing"], correctIndex: 0 },
      { text: "Vận dụng: Công ty vừa có Tổng giám đốc vừa có các phòng chức năng tham mưu. Đây là dạng cơ cấu nào?", options: ["Trực tuyến-chức năng", "Chỉ trực tuyến", "Chỉ chức năng", "Không có cơ cấu"], correctIndex: 0 },
      { text: "Vận dụng: Một doanh nghiệp muốn mỗi thành viên chịu trách nhiệm giới hạn trong phần vốn góp. Tiêu chí nào cần ưu tiên khi chọn loại hình?", options: ["Chế độ trách nhiệm tài sản", "Màu sắc thương hiệu", "Số lượt khách", "Vị trí quầy thuốc"], correctIndex: 0 },
      { text: "Vận dụng: Một nhà đầu tư cho rằng đăng ký doanh nghiệp là đủ để kinh doanh dược. Kết luận phù hợp với bài giảng là gì?", options: ["Còn phải đáp ứng điều kiện chuyên ngành dược", "Không cần điều kiện nào khác", "Chỉ cần quảng cáo", "Chỉ cần thuê mặt bằng"], correctIndex: 0 },
      { text: "Vận dụng: Một công ty dược quy mô vừa cần chia bộ phận theo sản xuất, kiểm nghiệm và kinh doanh. Dạng cơ cấu nào có thể phù hợp?", options: ["Cơ cấu chức năng", "Không phân bộ phận", "Chỉ cơ cấu hộ gia đình", "Cơ cấu theo khách hàng cá nhân"], correctIndex: 0 }
    ]
  ];

  const hash = value => {
    let result = 0;
    for (let index = 0; index < value.length; index += 1) {
      result = (Math.imul(result, 31) + value.charCodeAt(index)) >>> 0;
    }
    return result;
  };

  const shuffle = (values, seed) => {
    const result = [...values];
    let state = seed || 1;
    for (let index = result.length - 1; index > 0; index -= 1) {
      state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
      const target = state % (index + 1);
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  };

  const questions = [];
  facts.forEach((chapterFacts, chapterIndex) => {
    chapterFacts.forEach(([category, subject, detail]) => {
      const peers = chapterFacts.filter(fact => fact[0] === category);
      const answers = [...new Set(peers.map(fact => fact[2]))];
      const subjects = [...new Set(peers.map(fact => fact[1]))];
      const answerPool = answers.length >= 4 ? answers : [...new Set(chapterFacts.map(fact => fact[2]))];
      const subjectPool = subjects.length >= 4 ? subjects : [...new Set(chapterFacts.map(fact => fact[1]))];
      const pickOptions = (correct, pool, seed) => {
        const choices = shuffle(pool.filter(value => value !== correct), seed).slice(0, 3);
        const correctIndex = questions.length % 4;
        choices.splice(correctIndex, 0, correct);
        return { options: choices, answer: "ABCD"[correctIndex] };
      };

      questions.push({
        id: questions.length + 1,
        chapter: chapterIndex,
        text: `Trong nhóm ${category}, thông tin nào mô tả đúng về “${subject}”?`,
        ...pickOptions(detail, answerPool, hash(subject))
      });

      questions.push({
        id: questions.length + 1,
        chapter: chapterIndex,
        text: `Mô tả sau đây gắn với thành phần, khái niệm hoặc phương pháp nào trong nhóm ${category}: “${detail}”?`,
        ...pickOptions(subject, subjectPool, hash(detail))
      });
    });

    scenarios[chapterIndex].forEach(draft => {
      const optionOrder = shuffle([0, 1, 2, 3], hash(draft.text));
      questions.push({
        id: questions.length + 1,
        chapter: chapterIndex,
        text: draft.text,
        options: optionOrder.map(index => draft.options[index]),
        answer: "ABCD"[optionOrder.indexOf(draft.correctIndex)]
      });
    });
  });

  window.quizChapters = chapters;
  window.quizQuestions = questions;
})();
