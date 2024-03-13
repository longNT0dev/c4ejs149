1. Tìm hiểu về các giá trị của thuộc tính display trong css
    1.1. block
        Thẻ block luôn chiếm trọn 1 dòng bỏ qua việc nội dung có độ dài là bao nhiêu
        Thẻ block không thể nằm cùng hàng với nhau 
    1.2. inline
        Thẻ inline sẽ chỉ chiếm chiều rộng đúng bằng nội dung của nó
        Thẻ inline thì không thể thay đổi chiều rộng, chiều cao 
    1.3. inline-block
        Vừa có thể thay đổi chiều rộng chiều cao
        Vừa cho phép các thẻ nằm cùng 1 hàng với nhau
    1.4. flex*
        Bộ công cụ cho phép developer dàn layout(giao diện), căn chỉnh vị trí của các phần tử trong html
        display: flex cho thẻ cha 
        justify-content: Điều khiển các phần tử con theo trục chính
        align-items: Điều khiển các phần tử con theo trục phụ
        flex-direction: Thay đổi chiều trục chính và trục phụ
        Các giá trị của justify-content 
            flex-start: Các phần tử con sẽ nằm về bên tay trái
            flex-end: Các phần tử con sẽ nằm về bên tay phải
            center: Các phần tử con sẽ nằm vào giữa
            space-around: Khoảng cách giữa các phần tử con bằng nhau = a. Hai phần tử con ở 2 bên sẽ cách lề a/2
            space-between: Khoảng cách giữa các phần tử con bằng nhau = a. Hai phần tử con ở 2 bên sẽ nằm sát lề
            space-evenly: Khoảng cách giữa các phần tử con và 2 phần tử con ở 2 bên cách lề 1 đoạn bằng nhau
        Các giá trị của align-items
            flex-start: Các phần tử con sẽ nằm về bên tay trái
            flex-end: Các phần tử con sẽ nằm về bên tay phải
            center: Các phần tử con sẽ nằm vào giữa
        align-self: Các phần tử con tự thay đổi vị trí không tuân theo thẻ cha
        flex-wrap: Xuống dòng khi chiều rộng thẻ cha không đủ để đảm bảo chiều rộng mong muốn
        align-content: Căn chỉnh vị trí của các thẻ theo hàng (wrap)
        flex-basis: Xác định độ dài của thẻ con theo chiều trục chính
        flex-grow: Cho phép các phần tử tăng width hoặc height để chiếm hết khoảng trống còn lại của thẻ cha (Giá trị chiếm được sẽ chia theo phần)
        flex-shrink: Cho phép các phần tử giảm width hoặc height để phù hợp với width hoặc height của thẻ cha (Giá trị chiếm được sẽ chia theo phần)
    1.5. grid