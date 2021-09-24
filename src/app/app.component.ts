import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'we16102';
  profileUrl = "https://www.facebook.com/Mr.Gjn/";
  count = 0;
  posts = [
    {
      id: 1,
      title: 'Chú pet đáng yêu nhất mùa dịch ở Hà Nội: Ra đời nhờ cả nhà mua vịt lộn về ấp, cùng dự khai giảng, học bài với cô chủ lớp 1',
      imgUrl: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2021/9/23/photo1632410915404-1632410915508602213377.jpg',
      catename: 'Xã hội',
      shortDesc: "Chú vịt gần một tháng tuổi trở thành thú cưng trong nhà, được đặt tên là Kiu, với những biểu cảm vô cùng đáng yêu và ..."
    },
    {
      id: 2,
      title: 'Cô gái từng bị cạo lông mày khi làm bạn gái của Jungkook (BTS) 4 năm trước giờ ra sao?      ',
      imgUrl: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2021/9/23/photo1632400859168-16324008596351711329039.png',
      catename: 'Musik',
      shortDesc: "Từng có cơ duyên hợp tác cùng với Jungkook (BTS), cô gái này giờ đây đã trở thành một người nổi tiếng với visual và khả ..."
    },
    {
      id: 3,
      title: 'Té ra Squid Game đã 5 lần tự spoil sạch nội dung lẫn trùm cuối mà không ai nhận ra: Bí mật ở ngay trước mắt, nhìn lại mà câm nín!',
      imgUrl: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2021/9/23/photo1632383560688-163238356115459908903.png',
      catename: 'Cine',
      shortDesc: "Sự cài cắm quá tài tình của nhà sản xuất Squid Game đã hé lộ nhiều bí mật về diễn biến phim cũng như \"trùm cuối\", nhìn ..."
    }
  ]
  ngOnInit(){

    setInterval(() => {
      this.count++;
    }, 1000)
  }
  
  increaseCount(){
    this.count++;
    console.log(this.count);
  }
  changeTitle(e: any ){
    this.title = e.target.value
  }

  delete(removeId: any){
    console.log(removeId);
    this.posts = this.posts.filter(item => item.id != removeId);
  }
}
