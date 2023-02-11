import React from "react";
import { Menu } from "typings";
import RowItem from "./RowItem";

interface Props {
  title: string;
  menus: Menu[];
}

function Row({ title, menus }: Props) {
  return (
    <div>
      <div className="box-border font-extrabold text-2xl border-b-slate-600 border-b-2 w-[100%] mt-10 py-4 pl-4 bg-slate-900">
        {title}
      </div>
      {menus.map((item) => (
        <RowItem
          id={item.id}
          name={item.name}
          price={item.price}
          dsc={item.dsc}
        />
      ))}
    </div>
  );
}

export default Row;
