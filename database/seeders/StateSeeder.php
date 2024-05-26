<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = DB::table('cities')->select(['id','name','slug'])->get();// get all cities of vietnam

        $states    = [
            'an-giang'  => [//An Giang
                'TP. Long Xuyên',
                'TP. Châu Đốc',
                'Huyện An Phú',
                'Tx. Tân Châu',
                'Huyện Phú Tân',
                'Huyện Tịnh Biên',
                'Huyện Tri Tôn',
                'Huyện Châu Phú',
                'Huyện Chợ Mới',
                'Huyện Châu Thành',
                'Huyện Thoại Sơn'
            ],
            'ba-ria-vung-tau'  => [//Bà Rịa - Vũng Tàu
                'TP. Vũng Tàu',
                'TP. Bà Rịa',
                'Huyện Xuyên Mộc',
                'Huyện Long Điền',
                'Huyện Côn Đảo',
                'Huyện Tân Thành',
                'Huyện Châu Đức',
                'Huyện Đất Đỏ'
            ],
            'bac-giang'  => [//Bắc Giang
                'TP. Bắc Giang',
                'Huyện Yên Thế',
                'Huyện Lục Ngạn',
                'Huyện Sơn Động',
                'Huyện Lục Nam',
                'Huyện Tân Yên',
                'Huyện Hiệp Hoà',
                'Huyện Lạng Giang',
                'Huyện Việt Yên',
                'Huyện Yên Dũng'
            ],
            'bac-kan'  => [//Bắc Kạn
                'TP. Bắc Kạn',
                'Huyện Chợ Đồn',
                'Huyện Bạch Thông',
                'Huyện Na Rì',
                'Huyện Ngân Sơn',
                'Huyện Ba Bể',
                'Huyện Chợ Mới',
                'Huyện Pác Nặm'
            ],
            'bac-lieu'  => [//Bạc Liêu
                'TP. Bạc Liêu',
                'Huyện Vĩnh Lợi',
                'Huyện Hồng Dân',
                'Huyện Giá Rai',
                'Huyện Phước Long',
                'Huyện Đông Hải',
                'Huyện Hoà Bình'
            ],
            'bac-ninh'  => [//Bắc Ninh
                'TP. Bắc Ninh',
                'Huyện Yên Phong',
                'Huyện Quế Võ',
                'Huyện Tiên Du',
                'Tx. Từ  Sơn',
                'Huyện Thuận Thành',
                'Huyện Gia Bình',
                'Huyện Lương Tài'
            ],
            'ben-tre'  => [//Bến Tre
                'TP. Bến Tre',
                'Huyện Châu Thành',
                'Huyện Chợ Lách',
                'Huyện Mỏ Cày Bắc',
                'Huyện Giồng Trôm',
                'Huyện Bình Đại',
                'Huyện Ba Tri',
                'Huyện Thạnh Phú',
                'Huyện Mỏ Cày Nam'
            ],
            'binh-dinh'  => [//Bình Định
                'TP. Quy Nhơn',
                'Huyện An Lão',
                'Huyện Hoài Ân',
                'Huyện Hoài Nhơn',
                'Huyện Phù Mỹ',
                'Huyện Phù Cát',
                'Huyện Vĩnh Thạnh',
                'Huyện Tây Sơn',
                'Huyện Vân Canh',
                'Tx. An Nhơn',
                'Huyện Tuy Phước'
            ],
            'binh-duong'  => [//Bình Dương
                'Tp. Thủ Dầu Một',
                'Tx. Bến Cát',
                'Tx. Tân Uyên',
                'Tx. Thuận An',
                'Tx. Dĩ An',
                'Huyện Phú Giáo',
                'Huyện Dầu Tiếng',
                'Huyện Bắc Tân Uyên',
                'Huyện Bàu Bàng'
            ],
            'binh-phuoc' => [//Bình Phước
                'Tx. Đồng Xoài',
                'Huyện Đồng Phú',
                'Huyện Chơn Thành',
                'Tx. Bình Long',
                'Huyện Lộc Ninh',
                'Huyện Bù Đốp',
                'Tx. Phước Long',
                'Huyện Bù Đăng',
                'Huyện Hớn Quản',
                'Huyện Bù Gia Mập'
            ],
            'binh-thuan' => [//Bình Thuận
                'TP. Phan Thiết',
                'Huyện Tuy Phong',
                'Huyện Bắc Bình',
                'Huyện Hàm Thuận Bắc',
                'Huyện Hàm Thuận Nam',
                'Huyện Hàm Tân',
                'Huyện Đức Linh',
                'Huyện Tánh Linh',
                'Huyện đảo Phú Quý',
                'Tx. La Gi'
            ],
            'ca-mau' => [//Cà Mau
                'TP. Cà Mau',
                'Huyện Thới Bình',
                'Huyện U Minh',
                'Huyện Trần Văn Thời',
                'Huyện Cái Nước',
                'Huyện Đầm Dơi',
                'Huyện Ngọc Hiển',
                'Huyện Năm Căn',
                'Huyện Phú Tân'
            ],
            'can-tho' => [//Cần Thơ
                'Quận Ninh Kiều',
                'Quận Bình Thuỷ',
                'Quận Cái Răng',
                'Quận Ô Môn',
                'Huyện Phong Điền',
                'Huyện Cờ Đỏ',
                'Huyện Vĩnh Thạnh',
                'Quận Thốt Nốt',
                'Huyện Thới Lai'
            ],
            'cao-bang' => [//Cao Bằng
                'TP. Cao Bằng',
                'Huyện Bảo Lạc',
                'Huyện Thông Nông',
                'Huyện Hà Quảng',
                'Huyện Trà Lĩnh',
                'Huyện Trùng Khánh',
                'Huyện Nguyên Bình',
                'Huyện Hoà An',
                'Huyện Quảng Uyên',
                'Huyện Thạch An',
                'Huyện Hạ Lang',
                'Huyện Bảo Lâm',
                'Huyện Phục Hoà'
            ],
            'da-nang' => [//Đà Nẵng
                'Quận Hải Châu',
                'Quận Thanh Khê',
                'Quận Sơn Trà',
                'Quận Ngũ Hành Sơn',
                'Quận Liên Chiểu',
                'Huyện Hoà Vang',
                'Quận Cẩm Lệ',
                'Huyện Hoàng Sa'
            ],
            'dak-lak' => [//Đắk Lắk
                'TP. Buôn Ma Thuột',
                "Huyện Ea H'leo",
                'Huyện Krông Buk',
                'Huyện Krông Năng',
                'Huyện Ea Súp',
                'Huyện Cư Mgar',
                'Huyện Krông Pắc',
                'Huyện Ea Kar',
                "Huyện M'Đrăk",
                'Huyện Krông Ana',
                'Huyện Krông Bông',
                'Huyện Lăk',
                'Huyện Buôn Đôn',
                'Huyện Cư Kuin',
                'Thị Xã Buôn Hồ'
            ],
            'dak-nong' => [//Đắk Nông
                'Tx. Gia Nghĩa',
                'Huyện Đăk RLấp',
                'Huyện Đăk Mil',
                'Huyện Cư Jút',
                'Huyện Đăk Song',
                'Huyện Krông Nô',
                'Huyện Đăk GLong',
                'Huyện Tuy Đức'
            ],
            'dien-bien' => [//Điện Biên
                'TP. Điện Biên Phủ',
                'Tx. Mường Lay',
                'Huyện Điện Biên',
                'Huyện Tuần Giáo',
                'Huyện Mường Chà',
                'Huyện Tủa Chùa',
                'Huyện Điện Biên Đông',
                'Huyện Mường Nhé',
                'Huyện Mường ảng',
                'Huyện Nậm Pồ'
            ],
            'dong-nai' => [//Đồng Nai
                'TP. Biên Hoà',
                'Huyện Vĩnh Cửu',
                'Huyện Tân Phú',
                'Huyện Định Quán',
                'Huyện Thống Nhất',
                'Tx. Long Khánh',
                'Huyện Xuân Lộc',
                'Huyện Long Thành',
                'Huyện Nhơn Trạch',
                'Huyện Trảng Bom',
                'Huyện Cẩm Mỹ'
            ],
            'dong-thap' => [//Đồng Tháp
                'Huyện Châu Thành',
                'Huyện Lai Vung',
                'Huyện Lấp Vò',
                'TP. Sa Đéc',
                'TP. Cao Lãnh',
                'Huyện Cao Lãnh',
                'Huyện Tháp Mười',
                'Huyện Tam Nông',
                'Huyện Thanh Bình',
                'Thị Xã Hồng Ngự',
                'Huyện Hồng Ngự',
                'Huyện Tân Hồng'
            ],
            'gia-lai' => [//Gia Lai
                'TP. Pleiku',
                'Huyện Chư Păh',
                'Huyện Mang Yang',
                'Huyện KBang',
                'Tx. An Khê',
                'Huyện Kông Chro',
                'Huyện Đức Cơ',
                'Huyện Chư Prông',
                'Huyện Chư Sê',
                'Tx. Ayun Pa',
                'Huyện Krông Pa',
                'Huyện Ia Grai',
                'Huyện Đak Đoa',
                'Huyện Ia Pa',
                'Huyện Đak Pơ',
                'Huyện Phú Thiện',
                'Huyện Chư Pưh'
            ],
            'ha-giang' => [//Hà Giang
                'TP. Hà Giang',
                'Huyện Đồng Văn',
                'Huyện Mèo Vạc',
                'Huyện Yên Minh',
                'Huyện Quản Bạ',
                'Huyện Vị Xuyên',
                'Huyện Bắc Mê',
                'Huyện Hoàng Su Phì',
                'Huyện Xín Mần',
                'Huyện Bắc Quang',
                'Huyện Quang Bình'
            ],
            'ha-nam' => [//Hà Nam
                'TP. Phủ Lý',
                'Huyện Duy Tiên',
                'Huyện Kim Bảng',
                'Huyện Lý Nhân',
                'Huyện Thanh Liêm',
                'Huyện Bình Lục'
            ],
            'ha-noi' => [//Hà Nội
                'Quận Ba Đình',
                'Quận Hoàn Kiếm',
                'Quận Hai Bà Trưng',
                'Quận Đống Đa',
                'Quận Tây Hồ',
                'Quận Cầu Giấy',
                'Quận Thanh Xuân',
                'Quận Hoàng Mai',
                'Quận Long Biên',
                'Quận Bắc Từ Liêm',
                'Huyện Thanh Trì',
                'Huyện Gia Lâm',
                'Huyện Đông Anh',
                'Huyện Sóc Sơn',
                'Quận Hà Đông',
                'Tx. Sơn Tây',
                'Huyện Ba Vì',
                'Huyện Phúc Thọ',
                'Huyện Thạch Thất',
                'Huyện Quốc Oai',
                'Huyện Chương Mỹ',
                'Huyện Đan Phượng',
                'Huyện Hoài Đức',
                'Huyện Thanh Oai',
                'Huyện Mỹ Đức',
                'Huyện ứng Hoà',
                'Huyện Thường Tín',
                'Huyện Phú Xuyên',
                'Huyện Mê Linh',
                'Quận Nam Từ Liêm'
            ],
            'ha-tinh' => [//Hà Tĩnh
                'TP. Hà Tĩnh',
                'Tx. Hồng Lĩnh',
                'Huyện Hương Sơn',
                'Huyện Đức Thọ',
                'Huyện Nghi Xuân',
                'Huyện Can Lộc',
                'Huyện Hương Khê',
                'Huyện Thạch Hà',
                'Huyện Cẩm Xuyên',
                'Huyện Kỳ Anh',
                'Huyện Vũ Quang',
                'Huyện Lộc Hà'
            ],
            'hai-duong' => [//Hải Dương
                'TP. Hải Dương',
                'Tx. Chí Linh',
                'Huyện Nam Sách',
                'Huyện Kinh Môn',
                'Huyện Gia Lộc',
                'Huyện Tứ Kỳ',
                'Huyện Thanh Miện',
                'Huyện Ninh Giang',
                'Huyện Cẩm Giàng',
                'Huyện Thanh Hà',
                'Huyện Kim Thành',
                'Huyện Bình Giang'
            ],
            'hai-phong' => [//Hải Phòng
                'Quận Hồng Bàng',
                'Quận Lê Chân',
                'Quận Ngô Quyền',
                'Quận Kiến An',
                'Quận Hải An',
                'Quận Đồ Sơn',
                'Huyện An Lão',
                'Huyện Kiến Thụy',
                'Huyện Thủy Nguyên',
                'Huyện An Dương',
                'Huyện Tiên Lãng',
                'Huyện Vĩnh Bảo',
                'Huyện Cát Hải',
                'Huyện Bạch Long Vĩ',
                'Quận Dương Kinh'
            ],
            'hau-giang' => [//Hậu Giang
                'TP. Vị Thanh',
                'Huyện Vị Thuỷ',
                'Huyện Long Mỹ',
                'Huyện Phụng Hiệp',
                'Huyện Châu Thành',
                'Huyện Châu Thành A',
                'Tx. Ngã Bảy'
            ],
            'hoa-binh' => [//Hòa Bình
                'TP. Hoà Bình',
                'Huyện Đà Bắc',
                'Huyện Mai Châu',
                'Huyện Tân Lạc',
                'Huyện Lạc Sơn',
                'Huyện Kỳ Sơn',
                'Huyện Lương Sơn',
                'Huyện Kim Bôi',
                'Huyện Lạc Thuỷ',
                'Huyện Yên Thuỷ',
                'Huyện Cao Phong'
            ],
            'hung-yen' => [//Hưng Yên
                'TP. Hưng Yên',
                'Huyện Kim Động',
                'Huyện Ân Thi',
                'Huyện Khoái Châu',
                'Huyện Yên Mỹ',
                'Huyện Tiên Lữ',
                'Huyện Phù Cừ',
                'Huyện Mỹ Hào',
                'Huyện Văn Lâm',
                'Huyện Văn Giang'
            ],
            'khanh-hoa' => [//Khánh Hòa
                'TP. Nha Trang',
                'Huyện Vạn Ninh',
                'Tx. Ninh Hoà',
                'Huyện Diên Khánh',
                'Huyện Khánh Vĩnh',
                'TP. Cam Ranh',
                'Huyện Khánh Sơn',
                'Huyện đảo Trường Sa',
                'Huyện Cam Lâm'
            ],
            'kien-giang' => [//Kiên Giang
                'TP. Rạch Giá',
                'Tx. Hà Tiên',
                'Huyện Kiên Lương',
                'Huyện Hòn Đất',
                'Huyện Tân Hiệp',
                'Huyện Châu Thành',
                'Huyện Giồng Riềng',
                'Huyện Gò Quao',
                'Huyện An Biên',
                'Huyện An Minh',
                'Huyện Vĩnh Thuận',
                'Huyện Phú Quốc',
                'Huyện Kiên Hải',
                'Huyện U Minh Thượng',
                'Huyện Giang Thành'
            ],
            'kon-tum' => [//Kon Tum
                'TP. Kon Tum',
                'Huyện Đăk Glei',
                'Huyện Ngọc Hồi',
                'Huyện Đăk Tô',
                'Huyện Sa Thầy',
                'Huyện Kon Plông',
                'Huyện Đăk Hà',
                'Huyện Kon Rẫy',
                'Huyện Tu Mơ Rông'
            ],
            'lai-chau' => [//Lai Châu
                'TP. Lai Châu',
                'Huyện Tam Đường',
                'Huyện Phong Thổ',
                'Huyện Sìn Hồ',
                'Huyện Mường Tè',
                'Huyện Than Uyên',
                'Huyện Tân Uyên',
                'Huyện Nậm Nhùm'
            ],
            'lam-dong' => [//Lâm Đồng
                'TP. Đà Lạt',
                'TP. Bảo Lộc',
                'Huyện Đức Trọng',
                'Huyện Di Linh',
                'Huyện Đơn Dương',
                'Huyện Lạc Dương',
                'Huyện Đạ Huoai',
                'Huyện Đạ Tẻh',
                'Huyện Cát Tiên',
                'Huyện Lâm Hà',
                'Huyện Bảo Lâm',
                'Huyện Đam Rông'
            ],
            'lang-son' => [//Lạng Sơn
                'TP. Lạng Sơn',
                'Huyện Tràng Định',
                'Huyện Bình Gia',
                'Huyện Văn Lãng',
                'Huyện Bắc Sơn',
                'Huyện Văn Quan',
                'Huyện Cao Lộc',
                'Huyện Lộc Bình',
                'Huyện Chi Lăng',
                'Huyện Đình Lập',
                'Huyện Hữu Lũng'
            ],
            'lao-cai' => [//Lào Cai
                'Huyện  Bảo Thắng',
                'Huyện Bảo Yên',
                'Huyện Bát Xát',
                'Huyện Bắc Hà',
                'TP. Lào Cai',
                'Huyện Mường Khương',
                'Huyện  Sa Pa',
                'Huyện Si Ma Cai',
                'Huyện  Văn Bàn'
            ],
            'long-an' => [//Long An
                'TP. Tân An',
                'Huyện Vĩnh Hưng',
                'Huyện Mộc Hoá',
                'Huyện Tân Thạnh',
                'Huyện Thạnh Hoá',
                'Huyện Đức Huệ',
                'Huyện Đức Hoà',
                'Huyện Bến Lức',
                'Huyện Thủ Thừa',
                'Huyện Châu Thành',
                'Huyện Tân Trụ',
                'Huyện Cần Đước',
                'Huyện Cần Giuộc',
                'Huyện Tân Hưng',
                'Tx. Kiến Tường'
            ],
            'nam-dinh' => [//Nam Định
                'TP. Nam Định',
                'Huyện Mỹ Lộc',
                'Huyện Xuân Trường',
                'Huyện Giao Thủy',
                'Huyện ý Yên',
                'Huyện Vụ Bản',
                'Huyện Nam Trực',
                'Huyện Trực Ninh',
                'Huyện Nghĩa Hưng',
                'Huyện Hải Hậu'
            ],
            'nghe-an' => [//Nghệ An
                'TP. Vinh',
                'Tx. Cửa Lò',
                'Huyện Quỳ Châu',
                'Huyện Quỳ Hợp',
                'Huyện Nghĩa Đàn',
                'Huyện Quỳnh Lưu',
                'Huyện Kỳ Sơn',
                'Huyện Tương Dương',
                'Huyện Con Cuông',
                'Huyện Tân Kỳ',
                'Huyện Yên Thành',
                'Huyện Diễn Châu',
                'Huyện Anh Sơn',
                'Huyện Đô Lương',
                'Huyện Thanh Chương',
                'Huyện Nghi Lộc',
                'Huyện Nam Đàn',
                'Huyện Hưng Nguyên',
                'Huyện Quế Phong',
                'Thị Xã Thái Hòa',
                'Thị Xã Hoàng Mai'
            ],
            'ninh-binh' => [//Ninh Bình
                'TP. Ninh Bình',
                'Tx. Tam Điệp',
                'Huyện Nho Quan',
                'Huyện Gia Viễn',
                'Huyện Hoa Lư',
                'Huyện Yên Mô',
                'Huyện Kim Sơn',
                'Huyện Yên Khánh'
            ],
            'ninh-thuan' => [//Ninh Thuận
                'TP. Phan Rang - Tháp Chàm',
                'Huyện Ninh Sơn',
                'Huyện Ninh Hải',
                'Huyện Ninh Phước',
                'Huyện Bác Ái',
                'Huyện Thuận Bắc',
                'Huyện Thuận Nam'
            ],
            'phu-tho' => [//Phú Thọ
                'TP. Việt Trì',
                'Tx. Phú Thọ',
                'Huyện Đoan Hùng',
                'Huyện Thanh Ba',
                'Huyện Hạ Hoà',
                'Huyện Cẩm Khê',
                'Huyện Yên Lập',
                'Huyện Thanh Sơn',
                'Huyện Phù Ninh',
                'Huyện Lâm Thao',
                'Huyện Tam Nông',
                'Huyện Thanh Thủy',
                'Huyện Tân Sơn'
            ],
            'phu-yen' => [//Phú Yên
                'TP. Tuy Hòa',
                'Huyện Đồng Xuân',
                'Thị Xã Sông Cầu',
                'Huyện Tuy An',
                'Huyện Sơn Hòa',
                'Huyện Sông Hinh',
                'Huyện Đông Hòa',
                'Huyện Phú Hòa',
                'Huyện Tây Hòa'
            ],
            'quang-binh' => [//Quảng Bình
                'TP. Đồng Hới',
                'Huyện Tuyên Hoá',
                'Huyện Minh Hoá',
                'Huyện Quảng Trạch',
                'Huyện Bố Trạch',
                'Huyện Quảng Ninh',
                'Huyện Lệ Thuỷ',
                'Tx. Ba Đồn'
            ],
            'quang-nam' => [//Quảng Nam
                'TP. Tam Kỳ',
                'TP. Hội An',
                'Huyện Duy Xuyên',
                'Huyện Điện Bàn',
                'Huyện Đại Lộc',
                'Huyện Quế Sơn',
                'Huyện Hiệp Đức',
                'Huyện Thăng Bình',
                'Huyện Núi Thành',
                'Huyện Tiên Phước',
                'Huyện Bắc Trà My',
                'Huyện Đông Giang',
                'Huyện Nam Giang',
                'Huyện Phước Sơn',
                'Huyện Nam Trà My',
                'Huyện Tây Giang',
                'Huyện Phú Ninh',
                'Huyện Nông Sơn'
            ],
            'quang-ngai' => [//Quảng Ngãi
                'Huyện Bình Sơn',
                'Huyện Sơn Tịnh',
                'TP. Quảng Ngãi',
                'Huyện Tư Nghĩa',
                'Huyện Nghĩa Hành',
                'Huyện Mộ Đức',
                'Huyện Đức phổ',
                'Huyện Ba Tơ',
                'Huyện Minh Long',
                'Huyện Sơn Hà',
                'Huyện Sơn Tây',
                'Huyện Trà Bồng',
                'Huyện Tây Trà',
                'Huyện Lý Sơn'
            ],
            'quang-ninh' => [//Quảng Ninh
                'TP. Hạ Long',
                'TP. Cẩm Phả',
                'TP. Uông Bí',
                'TP. Móng Cái',
                'Huyện Bình Liêu',
                'Huyện Đầm Hà',
                'Huyện Hải Hà',
                'Huyện Tiên Yên',
                'Huyện Ba Chẽ',
                'Huyện Đông Triều',
                'Tx. Quảng Yên',
                'Huyện Hoành Bồ',
                'Huyện Vân Đồn',
                'Huyện Cô Tô'
            ],
            'quang-tri' => [//Quảng Trị
                'TP. Đông Hà',
                'Tx. Quảng Trị',
                'Huyện Vĩnh Linh',
                'Huyện Gio Linh',
                'Huyện Cam Lộ',
                'Huyện Triệu Phong',
                'Huyện Hải Lăng',
                'Huyện Hướng Hóa',
                'Huyện Đăkrông',
                'Huyện đảo Cồn Cỏ'
            ],
            'soc-trang' => [//Sóc Trăng
                'TP. Sóc Trăng',
                'Huyện Kế Sách',
                'Huyện Mỹ Tú',
                'Huyện Mỹ Xuyên',
                'Huyện Thạnh Trị',
                'Huyện Long Phú',
                'Tx. Vĩnh Châu',
                'Huyện Cù Lao Dung',
                'Tx. Ngã Năm',
                'Huyện Châu Thành',
                'Huyện Trần Đề'
            ],
            'son-la' => [//Sơn La
                'TP. Sơn La',
                'Huyện Quỳnh Nhai',
                'Huyện Mường La',
                'Huyện Thuận Châu',
                'Huyện Bắc Yên',
                'Huyện Phù Yên',
                'Huyện Mai Sơn',
                'Huyện Yên Châu',
                'Huyện Sông Mã',
                'Huyện Mộc Châu',
                'huyện Sốp Cộp',
                'Huyện Vân Hồ'
            ],
            'tay-ninh' => [//Tây Ninh
                'TP. Tây Ninh',
                'Huyện Tân Biên',
                'Huyện Tân Châu',
                'Huyện Dương Minh Châu',
                'Huyện Châu Thành',
                'Huyện Hòa Thành',
                'Huyện Bến Cầu',
                'Huyện Gò Dầu',
                'Huyện Trảng Bàng'
            ],
            'thai-binh' => [//Thái Bình
                'TP. Thái Bình',
                'Huyện Quỳnh Phụ',
                'Huyện Hưng Hà',
                'Huyện Đông Hưng',
                'Huyện Vũ Thư',
                'Huyện Kiến Xương',
                'Huyện Tiền Hải',
                'Huyện Thái Thuỵ'
            ],
            'thai-nguyen' => [//Thái Nguyên
                'TP. Thái Nguyên',
                'Tx. Sông Công',
                'Huyện Định Hoá',
                'Huyện Phú Lương',
                'Huyện Võ Nhai',
                'Huyện Đại Từ',
                'Huyện Đồng Hỷ',
                'Huyện Phú Bình',
                'Huyện Phổ Yên'
            ],
            'thanh-hoa' => [//Thanh Hóa
                'TP. Thanh Hoá',
                'Tx. Bỉm Sơn',
                'Tx. Sầm Sơn',
                'Huyện Quan Hoá',
                'Huyện Quan Sơn',
                'Huyện Mường Lát',
                'Huyện Bá Thước',
                'Huyện Thường Xuân',
                'Huyện Như Xuân',
                'Huyện Như Thanh',
                'Huyện Lang Chánh',
                'Huyện Ngọc Lặc',
                'Huyện Thạch Thành',
                'Huyện Cẩm Thủy',
                'Huyện Thọ Xuân',
                'Huyện Vĩnh Lộc',
                'Huyện Thiệu Hoá',
                'Huyện Triệu Sơn',
                'Huyện Nông Cống',
                'Huyện Đông Sơn',
                'Huyện Hà Trung',
                'Huyện Hoằng Hoá',
                'Huyện Nga Sơn',
                'Huyện Hậu Lộc',
                'Huyện Quảng Xương',
                'Huyện Tĩnh Gia',
                'Huyện Yên Định'
            ],
            'hue' => [//Huế
                'TP. Huế',
                'Huyện Phong Điền',
                'Huyện Quảng Điền',
                'Tx. Hương Trà',
                'Huyện Phú Vang',
                'Tx. Hương Thủy',
                'Huyện Phú Lộc',
                'Huyện Nam Đông',
                'Huyện A Lưới'
            ],
            'tien-giang' => [//Tiền Giang
                'TP. Mỹ Tho',
                'Tx. Gò Công',
                'Huyện Cái bè',
                'Huyện Cai lậy',
                'Huyện Châu thành',
                'Huyện Chợ Gạo',
                'Huyện Gò Công Tây',
                'Huyện Gò Công Đông',
                'Huyện Tân Phước',
                'Huyện Tân Phú Đông',
                'Tx. Cai Lậy'
            ],
            'tp-hcm' => [//TP. HCM
                'Quận 1',
                'Quận 2',
                'Quận 3',
                'Quận 4',
                'Quận 5',
                'Quận 6',
                'Quận 7',
                'Quận 8',
                'Quận 9',
                'Quận 10',
                'Quận 11',
                'Quận 12',
                'Quận Gò Vấp',
                'Quận Tân Bình',
                'Quận Tân Phú',
                'Quận Bình Thạnh',
                'Quận Phú Nhuận',
                'Quận Thủ Đức',
                'Quận Bình Tân',
                'Huyện Bình Chánh',
                'Huyện Củ Chi',
                'Huyện Hóc Môn',
                'Huyện Nhà Bè',
                'Huyện Cần Giờ'
            ],
            'tra-vinh' => [//Trà Vinh
                'TP. Trà Vinh',
                'Huyện Càng Long',
                'Huyện Cầu Kè',
                'Huyện Tiểu Cần',
                'Huyện Châu Thành',
                'Huyện Trà Cú',
                'Huyện Cầu Ngang',
                'Huyện Duyên Hải'
            ],
            'tuyen-quang' => [//Tuyên Quang
                'TP Tuyên Quang',
                'Huyện Lâm Bình',
                'Huyện Na Hang',
                'Huyện Chiêm Hoá',
                'Huyện Hàm Yên',
                'Huyện Yên Sơn',
                'Huyện Sơn Dương'
            ],
            'vinh-long' => [//Vĩnh Long
                'TP. Vĩnh Long',
                'Huyện Long Hồ',
                'Huyện Mang Thít',
                'Tx. Bình Minh',
                'Huyện Tam Bình',
                'Huyện Trà Ôn',
                'Huyện Vũng Liêm',
                'Huyện Bình Tân'
            ],
            'vinh-phuc' => [//Vĩnh Phúc
                'TP. Vĩnh Yên',
                'Huyện Tam Dương',
                'Huyện Lập Thạch',
                'Huyện Vĩnh Tường',
                'Huyện Yên Lạc',
                'Huyện Bình Xuyên',
                'Huyện Sông Lô',
                'Tx. Phúc Yên',
                'Huyện Tam Đảo'
            ],
            'yen-bai' => [//Yên Bái
                'TP. Yên Bái',
                'Tx. Nghĩa Lộ',
                'Huyện Văn Yên',
                'Huyện Yên Bình',
                'Huyện Mù Cang Chải',
                'Huyện Văn Chấn',
                'Huyện Trấn Yên',
                'Huyện Trạm Tấu',
                'Huyện Lục Yên'
            ],
        ];

        $data = [];
        foreach ($cities as $city) {
            $city_id = $city->id;
            $slug    = $city->slug;
            $stateOf = $states[$slug];
            foreach ($stateOf as $sss) {
                $data[] = [
                    'fk_city_id' => $city_id,
                    'name'    => $sss,
                    'slug'    => Str::slug($sss),
                    'active'  => '1',
                    'sort'    => 0,
                ];
            }

        }

        DB::table('states')->delete();
        DB::table('states')->insert($data);
    }
}