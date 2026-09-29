const services = ['Product design', 'Creative development', 'Art direction'];

const discoveries = [
  {
    number: '01',
    title: 'Đi để mở rộng góc nhìn',
    description: 'Mỗi chuyến đi là một dịp gặp những con người mới, ngắm một nơi chốn khác và mang về thêm một câu chuyện.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85',
    alt: 'Con đường giữa núi non trong một chuyến đi khám phá',
  },
  {
    number: '02',
    title: 'Thưởng thức món ngon',
    description: 'Mình thích khám phá quán ăn địa phương, thử món mới và hiểu thêm về văn hoá qua những hương vị thân quen.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85',
    alt: 'Một bàn ăn với nhiều món ăn được bày biện hấp dẫn',
  },
  {
    number: '03',
    title: 'Luôn học điều hay',
    description: 'Từ một cuốn sách đến một cuộc trò chuyện, mình trân trọng những điều tốt đẹp giúp bản thân hiểu hơn và sống tốt hơn.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85',
    alt: 'Sổ tay mở trên bàn, sẵn sàng ghi lại những điều mới',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header wrap">
        <a className="wordmark" href="#home" aria-label="Khánh Hoàng, về đầu trang">
          KH<span>.</span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#work">Đà Nẵng</a>
          <a href="#about">Về mình</a>
          <a href="#discoveries">Khám phá</a>
          <a className="nav-contact" href="#contact">Liên hệ <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-kicker"><span className="availability-dot" /> ĐANG NHẬN DỰ ÁN CHỌN LỌC</div>
        <div className="hero-content">
          <div className="hero-introduction">
            <h1>Hello</h1>
            <p className="hero-quote">“Cuộc sống là một hành trình trải nghiệm, mỗi nơi ta đi qua đều để lại một câu chuyện, mỗi người ta gặp đều dạy ta một bài học. Hãy sống hết mình, không ngừng khám phá và trân trọng từng khoảnh khắc, bởi thanh xuân chỉ đến một lần.”</p>
          </div>
          <div className="hero-aside">
            <img className="hero-portrait" src="/images/khanh-hoang-portrait.jpg" alt="Ảnh mới của Khánh Hoàng" />
            <a className="text-link" href="#work">Xem dự án <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-baseline">
          <span>PRODUCT DESIGNER <b>×</b> DEVELOPER</span>
          <span>ĐANG HỌC TẬP TẠI ĐÀ NẴNG</span>
          <span>16°03′ N&nbsp; 108°13′ E</span>
        </div>
        <div className="hero-rule" />
        <div className="hero-stamp" aria-hidden="true"><span>MAKE<br />GOOD<br />THINGS</span><b>✳</b></div>
      </section>

      <section className="journey-section" id="work">
        <div className="wrap">
          <div className="journey-heading">
            <div><span className="eyebrow">01 / HÀNH TRÌNH ĐÀ NẴNG</span><h2>Hai năm ở<br />thành phố biển.</h2></div>
            <p>Hai năm sống và học tập tại Đà Nẵng đã cho mình nhiều hơn những bài học trên giảng đường.</p>
          </div>
          <div className="journey-layout">
            <figure className="journey-image">
              <img src="/images/da-nang-journey.jpg" alt="Khung cảnh Đà Nẵng trong hành trình sống và học tập của Khánh Hoàng" />
              <figcaption>ĐÀ NẴNG · NƠI MÌNH ĐANG SỐNG VÀ HỌC TẬP</figcaption>
            </figure>
            <div className="journey-copy">
              <p className="journey-lead">Từ một nơi còn xa lạ, Đà Nẵng dần trở thành thành phố thân quen của mình.</p>
              <p>Những ngày học ở Đại học Duy Tân giúp mình trưởng thành hơn, biết chủ động và tự lập trong cuộc sống. Ngoài giờ học, mình thích đi dạo quanh thành phố, ghé biển, khám phá những góc mới và thử các món ăn địa phương.</p>
              <p>Mỗi trải nghiệm, cuộc gặp gỡ và điều mới học được đều góp thành một câu chuyện riêng. Hai năm ở đây khiến mình cởi mở hơn, biết trân trọng những điều giản dị và háo hức với chặng đường phía trước.</p>
              <div className="journey-facts">
                <span><b>02 NĂM</b> sống và học tập</span>
                <span><b>ĐÀ NẴNG</b> thành phố thân quen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-inner wrap">
          <div className="about-title"><span className="eyebrow">02 / VỀ MÌNH</span><h2>Tốt hơn khi<br />làm cùng nhau.</h2></div>
          <div className="about-copy">
            <p className="about-lead">Mình là Khánh, một product designer thích biến những vấn đề phức tạp thành trải nghiệm đơn giản và giàu cảm xúc.</p>
            <p>Mình làm việc ở giao điểm giữa tư duy sản phẩm, thiết kế thị giác và công nghệ. Từ phác thảo đầu tiên đến dòng code cuối cùng, mình tin những chi tiết nhỏ luôn tạo nên khác biệt lớn.</p>
            <dl className="profile-facts" aria-label="Thông tin cá nhân">
              <div><dt>Ngày sinh</dt><dd>11/07/2006</dd></div>
              <div><dt>Quê quán</dt><dd>Phong Nha, Quảng Bình</dd></div>
              <div><dt>Học tập</dt><dd>Đại học Duy Tân, Đà Nẵng</dd></div>
            </dl>
            <div className="services"><span className="eyebrow">MÌNH CÓ THỂ GIÚP BẠN</span><ul>{services.map((service) => <li key={service}>{service}<span aria-hidden="true">↗</span></li>)}</ul></div>
          </div>
          <div className="about-aside"><span>DESIGN WITH INTENTION.</span><span>BUILD WITH CURIOSITY.</span><span className="asterisk" aria-hidden="true">✳</span></div>
        </div>
      </section>

      <section className="football-section" id="football">
        <div className="football-inner wrap">
          <div className="football-heading">
            <div><span className="eyebrow">03 / NGOÀI THIẾT KẾ</span><h2>Hẹn nhau<br />trên sân cỏ.</h2></div>
            <p>Bóng đá là khoảng nghỉ mình yêu thích: một trận đấu hay, một buổi đá vui và thật nhiều năng lượng đồng đội.</p>
          </div>
          <div className="football-grid">
            <div className="football-image">
              <img
                src="/images/khanh-hoang-football.jpg"
                alt="Khánh Hoàng thi đấu bóng đá trong trang phục áo số 6"
                loading="lazy"
              />
              <span>NGOÀI GIỜ LÀM VIỆC · 90 PHÚT</span>
            </div>
            <div className="football-details">
              <div className="football-interest">
                <span className="eyebrow">MÌNH THÍCH</span>
                <p>Theo dõi những trận cầu hấp dẫn, bàn luận chiến thuật và cảm nhận bầu không khí bóng đá cùng bạn bè.</p>
              </div>
              <div className="football-activities">
                <span className="eyebrow">TRÊN SÂN &amp; NGOÀI KHÁN ĐÀI</span>
                <ul>
                  <li><span>01</span> Đá bóng giao lưu, rèn sức bền và tinh thần đồng đội.</li>
                  <li><span>02</span> Hẹn bạn bè xem và cổ vũ những trận đấu lớn.</li>
                  <li><span>03</span> Tìm cảm hứng từ nhịp chơi, chiến thuật và câu chuyện của mỗi đội.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="discoveries-section" id="discoveries">
        <div className="wrap">
          <div className="discoveries-heading">
            <div><span className="eyebrow">04 / NGOÀI SÂN CỎ</span><h2>Đi đây đó,<br />nếm điều mới,<br />học điều hay.</h2></div>
            <p>Mình thích những trải nghiệm giúp thế giới rộng hơn một chút: một nơi chưa từng đến, một món ăn chưa từng thử, hay một điều tử tế vừa học được.</p>
          </div>
          <div className="discoveries-grid">
            {discoveries.map((discovery) => (
              <article className="discovery" key={discovery.number}>
                <div className="discovery-image">
                  <img src={discovery.image} alt={discovery.alt} loading="lazy" />
                  <span>{discovery.number}</span>
                </div>
                <h3>{discovery.title}</h3>
                <p>{discovery.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="contact-section wrap" id="contact">
        <span className="eyebrow">05 / BẮT ĐẦU MỘT ĐIỀU GÌ ĐÓ</span>
        <div className="contact-row"><h2>Có ý tưởng<br />hay ho chứ?</h2><a className="contact-link" href="mailto:hello@khanhhoang.design">Hãy kể mình nghe <span aria-hidden="true">↗</span></a></div>
        <div className="footer-bottom"><a className="wordmark" href="#home">KH<span>.</span></a><span>THIẾT KẾ TỪ SỰ QUAN TÂM · © 2025</span><div className="social-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://www.behance.net/" target="_blank" rel="noreferrer">BEHANCE ↗</a></div></div>
      </footer>
    </main>
  );
}
