// components/Header.jsx
import { Input, AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow-sm p-4">
    <div className="container mx-auto flex items-center">
      <h1 className="text-2xl font-bold mr-8">MyShop</h1>
      <AutoComplete
        className="w-1/2"
        options={[]}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      >
        <Input 
          size="large" 
          placeholder="Search products..." 
          prefix={<SearchOutlined />} 
        />
      </AutoComplete>
    </div>
  </header>
);
export default Header;
