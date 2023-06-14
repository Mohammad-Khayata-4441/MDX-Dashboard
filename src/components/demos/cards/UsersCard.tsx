import { Avatar, Card, Chip, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { FaEllipsisH, FaEllipsisV } from 'react-icons/fa'

export default function UsersCard() {
    return (
        <Card className='col-span 12 md:col-span-4 p-4'>
            <Typography variant="h6" fontWeight={'bold'}>Active Users</Typography>
            <Typography variant="body1" color='GrayText' >Lorem ipsum dolor sit amet.</Typography>
            <List sx={{ width: '100%' , bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/user.jpg" />
                    </ListItemAvatar>

                    <ListItemText
                        primary="Mohammad Khayata"
                        secondary={
                            <>
                                <Chip color='info' size='small' label='SuperAdmin'></Chip>
                            </>
                        }
                    />
                    <IconButton>
                        <FaEllipsisV></FaEllipsisV>
                    </IconButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/albert.jpg" />
                    </ListItemAvatar>

                    <ListItemText
                        primary="Albert"
                        secondary={
                            <>
                                <Chip color='default' size='small' label='Admin'></Chip>
                            </>
                        }
                    />
                    <IconButton>
                        <FaEllipsisV></FaEllipsisV>
                    </IconButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/emilia.jpg" />
                    </ListItemAvatar>

                    <ListItemText
                        primary="Emilia clarke"
                        secondary={
                            <>
                                <Chip color='default' size='small' label='Admin'></Chip>
                            </>
                        }
                    />
                    <IconButton>
                        <FaEllipsisV></FaEllipsisV>
                    </IconButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/gabriel.jpg" />
                    </ListItemAvatar>

                    <ListItemText
                        primary="Gabriel Martinelli"
                        secondary={
                            <>
                                <Chip color='default' size='small' label='Admin'></Chip>
                            </>
                        }
                    />
                    <IconButton>
                        <FaEllipsisV></FaEllipsisV>
                    </IconButton>
                </ListItem>
            </List>
        </Card>
    )
}
