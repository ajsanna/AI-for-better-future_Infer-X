import "../assets/css/List.css";
import { listitem } from "../assets/data/listitem"
import ListItem from "../components/ListItem"
import * as images from "../assets/data/images";

export default function List() {
  const ListData = listitem;
  

  return (
    <>
      <div className='list'>
        <div className='header'>
          <div className='maintext'>
            MANAGE DEVICES
          </div>
          <div className='overall_status'>
            <div className='working'>
              <div className='online'></div>
            </div>
          </div>
        </div>

        {ListData.map((item) => (
          <ListItem
            name={item.name}
            status={item.status}/>
        ))}
        

        {/* <div className='card'>
          <div className='image' style={{
            backgroundImage: `url(${images.robot_arm_1})`
          }}> </div>

          <div className='textbox'>
            <div className='card_title'> 
              WeldWise Robot 1
            </div>
            <div classname='text'>
              Status: Available
            </div>
          </div>

          <div className='status_bar' style={{
            backgroundColor: '#0d825f'
          }}></div>
        </div>

        <div className='card'>
          <div className='image' style={{
              backgroundImage: `url(${images.robot_arm_1})`
          }}> </div>

          <div className='textbox'>
            <div className='card_title'> 
              WeldWise Robot 2
            </div>
            <div classname='text'>
              Status: Welding <br />
            </div>
          </div>

          <div className='status_bar' style={{
            backgroundColor: '#edcd18'
          }}></div>
        </div>

        <div className='card'>
          <div className='image' style={{
            backgroundImage: `url(${images.robot_arm_1})`
          }}> </div>

          <div className='textbox'>
            <div className='card_title'> 
              WeldWise Robot 3
            </div>
            <div classname='text'>
              Status: Available
            </div>
          </div>

          <div className='status_bar' style={{
            backgroundColor: '#0d825f'
          }}></div>
        </div>

        <div className='card'>
          <div className='image' style={{
              backgroundImage: `url(${images.robot_arm_1})`
          }}> </div> 

          <div className='textbox'>
            <div className='card_title'> 
              WeldWise Robot 4
            </div>
            <div classname='text'>
              Status: Offline <br />
              Maintainance Required
            </div>
          </div>

          <div className='status_bar' style={{
            backgroundColor: '#ed1818'
          }}></div>
        </div> */}
      </div>
    </>
  )
}
