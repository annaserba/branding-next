import React from "react";
import "./style.css";

export const Banner = (): JSX.Element => {
  return (
    <div className="banner">
      <div className="overlap">
        <img className="element" alt="Element" src="/img/1.svg" />
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="group">
            <div className="div" />
          </div>
          <p className="text-wrapper">
            В нашей стратегии — вертикальный взлет на уровень лучших банков страны. Для этого нужны амбициозность, азарт
            и смелость. Мы готовы принимать нестандартные решения и менять бизнес. Для этого у нас есть ресурсы
            надежного банка с государственной поддержкой и дух растущей организации.
          </p>
          <div className="frame">
            <p className="p">ПСБ — банк для настоящих и смелых</p>
            <p className="text-wrapper-2">
              Мы создаём нужные решения для каждого: понимаем потребности частных клиентов, поддерживаем малый и средний
              бизнес и сопровождаем гособоронзаказ
            </p>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="overlap-group-2">
                <img className="img" alt="Group" src="/img/group-1127.png" />
                <img className="element-2" alt="Element" src="/img/2.png" />
                <img className="group-2" alt="Group" src="/img/group-1129.png" />
                <img className="vector" alt="Vector" src="/img/vector-2.svg" />
                <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
              </div>
              <img className="vector-3" alt="Vector" src="/img/vector.svg" />
            </div>
          </div>
          <img className="vector-4" alt="Vector" src="/img/vector-5.svg" />
          <img className="frame-2" alt="Frame" src="/img/frame-2.svg" />
          <img className="frame-3" alt="Frame" src="/img/frame-3.svg" />
        </div>
      </div>
    </div>
  );
};
