import Carousel from 'react-bootstrap/Carousel';
import "./CSS/HomeCarousel.css"

function HomeCarousel(){
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="viewcard"
          src={process.env.PUBLIC_URL + "images/Carousel1.jpg"} alt="Carousel1"
        />
        <Carousel.Caption>
          <h3 className='hfont'>걱정 없는 결제 수단</h3>
          <p className='hfont'>그 편리함을 지금 누리세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="viewcard"
          src={process.env.PUBLIC_URL + "images/Carousel2.jpg"} alt="Carousel2"
        />

        <Carousel.Caption>
          <h3 className='hfont'>Planet이 선택한 최고의 뷰티제품</h3>
          <p className='hfont'>한눈에 모두 보고 한번에 구매하세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="viewcard"
          src={process.env.PUBLIC_URL + "images/Carousel3.jpg"} alt="Carousel3"
        />

        <Carousel.Caption>
          <h3 className='hfont'>해외배송 두려움은 넣어두세요</h3>
          <p className='hfont'>
            Planet에서 계신곳까지 안전하게 보내드립니다.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="viewcard"
          src={process.env.PUBLIC_URL + "images/Carousel4.jpg"} alt="Carousel4"
        />

        <Carousel.Caption>
          <h3 className='hfont'>자녀와 나에게 최고의 경험을 만들어주세요</h3>
          <p className='hfont'>
          Planet에서 최고의 경험 최고의 선택을
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="viewcard"
          src={process.env.PUBLIC_URL + "images/Carousel5.jpg"} alt="Carousel5"
        />

        <Carousel.Caption>
          <h3 className='hfont2'> 성능 Up! 가격 Down! </h3>
          <p className='hfont2'>
            최고의 장비를 가장 저렴하게 최저가 Planet에서 누리세요
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;

