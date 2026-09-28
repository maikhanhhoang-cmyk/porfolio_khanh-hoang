const projects = [
  {
    number: '01',
    name: 'Mở Khóa',
    type: 'FINTECH · PRODUCT DESIGN',
    description: 'Một cách gần gũi hơn để bắt đầu hành trình tài chính cá nhân.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85',
    alt: 'Bàn tay thao tác thanh toán trên điện thoại tại quầy cà phê',
    className: 'project-image--finance',
    year: '2025',
  },
  {
    number: '02',
    name: 'Nếp Studio',
    type: 'BRANDING · E-COMMERCE',
    description: 'Đưa vẻ đẹp thủ công Việt vào một trải nghiệm mua sắm đương đại.',
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1400&q=85',
    alt: 'Chi tiết sản phẩm gốm thủ công trong cửa hàng sáng tự nhiên',
    className: 'project-image--objects',
    year: '2024',
  },
  {
    number: '03',
    name: 'Nhịp',
    type: 'WELLNESS · DIGITAL PRODUCT',
    description: 'Một không gian số nhẹ nhàng để lắng nghe nhịp sống mỗi ngày.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85',
    alt: 'Người tập thiền trong không gian nhiều ánh sáng',
    className: 'project-image--wellness',
    year: '2024',
  },
];

const services = ['Product design', 'Creative development', 'Art direction'];

export default function Home() {
  return (
    <main>
      <header className="site-header wrap">
        <a className="wordmark" href="#home" aria-label="Khánh Hoàng, về đầu trang">
          KH<span>.</span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#work">Dự án <span>03</span></a>
          <a href="#about">Về mình</a>
          <a href="#football">Bóng đá</a>
          <a className="nav-contact" href="#contact">Liên hệ <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-kicker"><span className="availability-dot" /> ĐANG NHẬN DỰ ÁN CHỌN LỌC</div>
        <div className="hero-content">
          <h1>Chào, mình là<br />Khánh Hoàng<span className="hero-period">.</span></h1>
          <div className="hero-aside">
            <p>Thiết kế sản phẩm số với sự tò mò, rõ ràng và một chút táo bạo.</p>
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

      <section className="work-section wrap" id="work">
        <div className="section-heading">
          <div><span className="eyebrow">01 / CÔNG VIỆC ĐÃ CHỌN</span><h2>Một vài điều<br />mình đã làm.</h2></div>
          <p className="section-note">Ý tưởng tốt tạo nên trải nghiệm<br />hữu ích, đáng nhớ và có ích lâu dài.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-image ${project.className}`}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-index">{project.number} / {project.year}</span>
                <span className="image-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <p className="work-footnote">DỰ ÁN CONCEPT &amp; CASE STUDY ĐỘC LẬP</p>
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

      <footer className="contact-section wrap" id="contact">
        <span className="eyebrow">04 / BẮT ĐẦU MỘT ĐIỀU GÌ ĐÓ</span>
        <div className="contact-row"><h2>Có ý tưởng<br />hay ho chứ?</h2><a className="contact-link" href="mailto:hello@khanhhoang.design">Hãy kể mình nghe <span aria-hidden="true">↗</span></a></div>
        <div className="footer-bottom"><a className="wordmark" href="#home">KH<span>.</span></a><span>THIẾT KẾ TỪ SỰ QUAN TÂM · © 2025</span><div className="social-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://www.behance.net/" target="_blank" rel="noreferrer">BEHANCE ↗</a></div></div>
      </footer>
    </main>
  );
}
