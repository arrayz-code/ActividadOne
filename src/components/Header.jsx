import { HomeTwoTone, EditTwoTone, DollarTwoTone  ,BookTwoTone} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" >
      <Menu.Item key="h" icon= {<HomeTwoTone />}>
       <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="r" icon= {<EditTwoTone />} style={{ marginLeft: 'auto' }}>
        <Link to="/reserva">Reserva</Link>
      </Menu.Item>
      <Menu.Item key="b" icon= {<BookTwoTone />} >
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="c" icon= {<DollarTwoTone  />} >
        <Link to="/consulta">Consulta</Link>
      </Menu.Item>
     </Menu>
     <Outlet/>
    </>
   
  )
};
export default Header;
