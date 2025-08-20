import React from "react";
import StatCard from '../components/Home/StatCard'
import FavoriteItemCard from '../components/Home/FavouriteItemCard'


export default function Home(){
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Menu" value="325" ring={66}/>
        <StatCard title="Total Revenue" value="$352K" ring={64}/>
        <StatCard title="Total Rooms" value="35" ring={60}/>
        <StatCard title="Total Customers" value="985" ring={62}/>
      </div>

      <div className="text-xl font-semibold mt-8 mb-4">Must Favorites Items</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FavoriteItemCard/>
        <FavoriteItemCard/>
        <FavoriteItemCard/>
        <FavoriteItemCard/>
      </div>
    </>
  );
}
