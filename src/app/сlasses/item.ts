import { ItemSize } from './itemSize';

export class Item
{
    public id:Number;
    public color:String;
    public picturePath:String;
    public price:String;
    public name:String;
    public description:String;
    public itemCount:Number;
    public sizes:ItemSize[];
}