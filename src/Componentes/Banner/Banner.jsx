import bannerImagem from './img/banner.png';
import './Banner.css';

function Banner() {
  return (
    <header className="banner-header">
      <img src={bannerImagem} alt="Banner principal da página" className="banner-imagem" />
    </header>
  );
}

export default Banner;