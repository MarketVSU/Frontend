import { ItemSize } from './itemSize';

export class Item
{
    public Id:Number;
    public Color:String;
    public PicturePath:String;
    public Price:number;
    public Name:String;
    public Description:String;
    public ItemCount:Number;
    public Sizes:ItemSize[];
}