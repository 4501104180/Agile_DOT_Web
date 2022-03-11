import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { Stack, Box, Typography,Tooltip, Chip } from '@mui/material';
import { AddCircle, Edit, Delete } from '@mui/icons-material';

// path
import { PATH_DASHBOARD } from '../../routes/path'

const columns = [
    {
        field: 'name',
        title: 'Name',
        width: '50%',
    },
    {
        field: 'image',
        title: 'Image',
        width: '50%',
        render: row => (
            <Tooltip
                disableFocusListener
                placement='left'
                title={<img src={row.image} alt='' />}
            >
                <img
                    src={row.image}
                    alt=''
                    style={{
                        width: '80px',
                        height: '80px'
                    }}
                />
            </Tooltip>
        )
    },
    {
        field: 'price',
        title: 'Price',
        width: '50%',
    },
    {
        
        field: 'discount',
        title: 'Discount',
        width: '50%',
       
    },
    {
        field: 'quantity',
        title: 'Quantity',
        width: '50%',
    },
    {
        field: 'VATFee',
        title: 'VATFee',
        width: '50%',
    }
];

const rows = [
    {
        id: '1',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '2',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '3',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '4',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '5',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '6',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '7',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '8',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '9',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    },
    {
        id: '10',
        name:'laptop',
        image:'https://product.hstatic.net/1000233206/product/asus-vivobook-s533eq-bn338t_cbbbdef6ef214c8599b100fd46b5e18e_master.png',
        price:100000,
        discount:'10%',
        quantity:1234,
        VATFee: '2%'
    }
];

const options = {
    selection: true,
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    tableLayout: 'fixed'
};

const ProductList = () => {
    const navigate = useNavigate();
    return (
        <MaterialTable
            title='Product'
            columns={columns}
            data={rows}
            options={options}
            actions={[
                {
                    icon: () => <Edit color='warning' />,
                    tooltip: 'View and Edit',
                    onClick: (event, row) => navigate(`/product/${row.name}`),
                    position: 'row'
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Delete',
                    onClick: (event, rowData) => alert("You want to delete " + rowData.name),
                    position: 'row'
                },
                {
                    icon: () => <AddCircle color='success' />,
                    tooltip: 'Add',
                    isFreeAction: true,
                    onClick: () => navigate(PATH_DASHBOARD.product.create)
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Delete selected',
                    onClick: (evt, data) => alert('Are you sure delete?')
                }
            ]}
        />
    );
};

export default ProductList;
