import '../../styles/ListAudit.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




//вывод списка доступных аудиторий
export default function ListAudit() {

    // const [images, setImages] = useState([]);

    const images = [
        { id: 1, title: "Видеостудия дополненной реальности", text: "Наша видеостудия звукозаписи хорошо подходит для проведения онлайн-уроков и вебинаров, благодаря наличию современного звукового и технического оборудования.", url: "assets/img/video.png" },
        { id: 2, title: "Аудитория виртуальной реальности", text: "Наша аудитория также включает в себя пользователей, которые используют VR для обучения и профессиональной подготовки. VR-технологии предоставляют безопасную и контролируемую среду, особенно полезно для профессиональных навыков.", url: "assets/img/VR.png" },
        { id: 3, title: "Симуляционный центр", text: "Симуляционный центр - это важная часть нашего комплекса, где пользователи могут получать безопасное и контролируемое обучение. Он предназначен для профессиональной подготовки и может быть использован для проверки и обучения персонала.", url: "assets/img/simulete.png" },
        { id: 4, title: "Музей ", text: "Музей организации может иметь значительное влияние на формирование мировоззрения и установок у посетителей, а также на развитие корпоративной культуры и лояльности сотрудников.", url: "assets/img/musem.png" }
    ];

    

    return (
        <div className="list__container">
          <div className="list__icons">
            {images.map(({ id, title, text, url }) => (
              <Link to={`/Audience-${id}`} className='list__link' key={id}>
                <div className="list__icon" style={{ backgroundImage: `url(${url})` }}>
                  <h2 className="list__title">{title}</h2>
                  <p className="list__text">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
      
}