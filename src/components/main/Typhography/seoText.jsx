import React from 'react'
import "./seoText.scss"

const seoText = () => {
    return (
        <div className='text-container text-center p-4 mt-5 rounded'>
            <h2 className='text-white'>Ürünler ve Sektörel Çözümler</h2>
            <hr />
            <h4 className='text-white'>Türkiye'nin En Çok Tercih Edilen Araç Takip ve Filo Yönetim Sistemleri ile Tanışın!</h4>

            <div className='paragraph-container d-flex flex-wrap justify-content-around   p-1 mt-5'>
                <p className='paragraph mt-4 text-start '>
                    Güvenli ve Ekonomik Sürüş Sistemi şirketlerin sahadaki ekiplerinin trafikteki davranışlarının takibi ve analizi amacıyla <b className='mx-2'>RMİRA</b> tarafından özel olarak geliştirilmiş bir sistemdir. Sistem sayesinde sürücülerin trafik güvenliğinin arttırılması, kötü araç kullanımı kaynaklı araç giderlerinin düşürülmesi, sürücü ve şirket bazında daha güvenli ve ekonomik sürüş alışkanlıklarının kazandırılması hedeflenmektedir.
                </p>
                <p className='paragraph mt-4 text-start'>
                    <b className='mx-2'>RMİRA</b> tarafından servis hizmeti veren firmalar, servis hizmeti alan kurumlar / okullar ve velilerin kullanımı için özel olarak geliştirilmiş bir sistemdir. Sistem sayesinde kullanıcılar, internete bağlandıkları her yerden servis araçlarının hizmet saatleri içerisindeki bütün hareketlerini anlık ve geçmişe dönük olarak takip ve kontrol edilebilmektedir. Servis aracının izlediği yollar, hareket saatleri, servise binecek kişilerin saat kaçta, hangi noktadan alınacakları, bu kişilerin işe-okula eve varış saatleri, servis aracının duraklama yaptığı yerler, duraklama süreleri gibi bilgiler anında görülebilmektedir.
                </p>
            </div>
        </div>
    )
}

export default seoText