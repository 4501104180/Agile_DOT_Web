import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { Stack, Box, Typography } from '@mui/material';
import { AddCircle, Edit, Delete } from '@mui/icons-material';

// path
import { PATH_DASHBOARD } from '../../routes/path'

const columns = [
    {
        field: 'email',
        title: 'Email',
        width: '30%',
    },
    {
        
        field: 'name',
        title: 'Name',
        width: '30%',
        render: row => (
            <Stack
                direction='row'
                alignItems='center'
                spacing={1}
            >
                <Box
                    component='img'
                    alt={row.name}
                    src={row.image}
                    sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%'
                    }}
                />
                <Typography variant='subtitle2'>{row.name}</Typography>
            </Stack>
        )
    },
    {
        field: 'phone',
        title: 'Phone',
        width: '15%',
    },
    {
        field: 'address',
        title: 'Address',
        width: '25%',
    }
];

const rows = [
    {
        id: '1',
        email: 'nguyenvanA@gmail.com',
        name: 'Nguyen Van A',
        image: 'https://i.pinimg.com/236x/3e/e8/43/3ee8435b49d6c17c6b2d8f7ee66f1976.jpg',
        phone: '0902751063',
        address: '123 Tran Hung Dao Q1'
    },
    {
        id: '2',
        email: 'levanB@gmail.com',
        name: 'Nguyen Van B',
        image: 'https://i.pinimg.com/236x/90/b9/fa/90b9fadad37babfa9a1f8ee8ec68c4c2.jpg',
        phone: '0586752014',
        address: '122 Nguyen Van Cu Q5'
    },
    {
        id: '3',
        email: 'nguyenthic@gmail.com',
        name: 'Nguyen Thi C',
        image: 'https://i.pinimg.com/236x/70/05/86/7005860a5693943482cf1f891e56a47c.jpg',
        phone: '0586782512',
        address: '180 An Duong Vuong Q5'
    },
    {
        id: '4',
        email: 'nguyenthiV@gmail.com',
        name: 'Nguyen Thi V',
        image: 'https://i.pinimg.com/236x/69/e4/27/69e427addedd011b119fd9dba033fd56.jpg',
        phone: '0586258632',
        address: '120 Le Van Si Q3'
    },
    {
        id: '5',
        email: 'nguyenthiT@gmail.com',
        name: 'Nguyen Thi T',
        image: 'https://i.pinimg.com/236x/da/69/ba/da69baa556dbbb32c32c98ae65b44742.jpg',
        phone: '0586653214',
        address: '132 XVNT Q.BT'
    },
    {
        id: '6',
        email: 'tranvanF@gmail.com',
        name: 'Tran Van F',
        image: 'https://i.pinimg.com/564x/6c/4b/6b/6c4b6b5e84f88d2768eb1e0c2eaf06c9.jpg',
        phone: '0586411235',
        address: '321 Ton Duc Thang Q.BT'
    },
    {
        id: '7',
        email: 'nguyenthiH@gmail.com',
        name: 'Nguyen Thi H',
        image: 'https://i.pinimg.com/236x/14/51/ce/1451ceabafb5846466032e960d8b5810.jpg',
        phone: '0369124568',
        address: '12 Hoang Dieu'
    },
    {
        id: '8',
        email: 'phungthiP@gmail.com',
        name: 'Phung Thi P',
        image: 'https://i.pinimg.com/236x/2c/7b/eb/2c7bebde62bc00b7c7a8295c5ecd6e6a.jpg',
        phone: '0586716891',
        address: '54 Nguyen Cong Tru'
    },
    {
        id: '9',
        email: 'nguyenthiN@gmail.com',
        name: 'Nguyen Thi N',
        image: 'https://i.pinimg.com/236x/91/3d/58/913d583210da6fdce16be9c3ab11d0ad.jpg',
        phone: '0583611672',
        address: '16 Nguyen Huu Canh QBT'
    },
    {
        id: '10',
        email: 'nguyen vanT@gmail.com',
        name: 'Nguyen Van T',
        image: 'https://i.pinimg.com/236x/c1/b9/31/c1b9311315dc2d7fa436cb5a72470c73.jpg',
        phone: '058485520',
        address: '13 Dinh Tien Hoang Q1'
    }
];

const options = {
    selection: true,
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    tableLayout: 'fixed'
};

const AccountList = () => {
    const navigate = useNavigate();
    return (
        <MaterialTable
            title='Account'
            columns={columns}
            data={rows}
            options={options}
            actions={[
                {
                    icon: () => <Edit color='warning' />,
                    tooltip: 'Xem và sửa',
                    onClick: (event, row) => navigate(`/account/${row.email}`),
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
                    tooltip: 'Thêm',
                    isFreeAction: true,
                    onClick: () => navigate(PATH_DASHBOARD.account.create)
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Remove All Selected Users',
                    onClick: (evt, data) => alert('You want to delete rows')
                }
            ]}
        />
    );
};

export default AccountList;
