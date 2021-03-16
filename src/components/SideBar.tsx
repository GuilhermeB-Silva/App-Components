import {Button} from '../components/Button'

interface Buttons {
  id:number;
  title:string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected:boolean;
  clickButton(id:number):void
  
}


export function SideBar({id,title,selected,iconName,clickButton}:Buttons) {
  // Complete aqui
 return (
      <>

      <Button
      id={String(id)}
      title={title}
      iconName={iconName}
      selected={selected}
      onClick={()=>clickButton(id)}



      />

      </>
 )


}