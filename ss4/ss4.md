1. Box model: 
    Nội dung của thẻ
    Border của thẻ
    padding: Khoảng cách giữa nội dung của thẻ và border
    margin: Khoảng cách giữa các border với nhau (giữa 2 thẻ)
-> padding hay margin thì đều có chiều: trên phải dưới trái    
2 Position:
    static: Vị trí mặc định của các phần tử trong html, viết trước hiển thị trước, viết sau thì hiển thị sau theo chiều từ trên xuống dưới, từ trái qua phải
    relative: Cho phép thay đổi vị trí của thẻ so với vị trí ban đầu. Khi di chuyển đi sẽ vẫn chiếm khoảng trống

    absolute: Cho phép thay đổi vị trí của thẻ so với 1 mốc (1 thẻ). Khi di chuyển đi sẽ không còn chiếm khoảng trống
    -> Làm sao để lấy thẻ làm mốc
        Thẻ làm mốc phải là thẻ cha
        Thẻ làm mốc phải có position là absolute hoặc relative
    -> Nếu như không có thẻ nào làm mốc thì thẻ có thuộc tính absolute sẽ nhận body làm mốc

    fixed: Cố định 1 thẻ tại vị trí nhất định dù có cuộn trang
--> padding thì chỉ dịch chuyển phần nội dung còn position dịch chuyển cả thẻ