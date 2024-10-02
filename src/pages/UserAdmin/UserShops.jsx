import React from "react";
import ComponentHeader from "../../components/ComponentHeader";
import ShopCard from "../../components/UserAdmin/ShopCard";
import "./userAdmin.css";
import WhiteButton from "../../components/buttons/WhiteButton";

const UserShops = () => {
  return (
    <div className="shop-cards-body">
      <ComponentHeader>Мои магазины</ComponentHeader>
      <div className="shop-cards">
        <ShopCard
          name="Магазин Цифровых товаров"
          status="1.000 пользователей"
          industry="users"
        />
        <ShopCard
          name="Авиабилеты Чемодан-Вокзал-Анапа"
          status="The Open Network"
          industry="shops"
        />
      </div>
      <div className="new-shop">
        <h3>Новый Магазин</h3>
        <WhiteButton className="fullwidth">Build</WhiteButton>
      </div>
    </div>
  );
};

export default UserShops;
