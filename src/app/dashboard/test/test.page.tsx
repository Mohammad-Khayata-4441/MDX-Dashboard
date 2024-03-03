import { UserApi, UserEndpoints } from '@/api/users/actions'
import Page from '@/shared/components/Page'
import { useFeedback } from '@/shared/hooks/useFeedback'
import { Button, Card, CardActions, CardContent, CardHeader, IconButton } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { BsTrash } from 'react-icons/bs'

export default function TestPage() {
  const withFeedback = useFeedback()
  const { data } = useQuery({
    queryFn: UserApi.GetUsers,
    queryKey: [UserEndpoints.BASE]
  })

  const qc = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: () => withFeedback(() => UserApi.CreateUser(
      {
        "gender": "male",
        "email": "string" + Math.random() * 1000 + '@mail.com',
        "phone": Math.random().toFixed(10),
        "password": "string",
      }), {
      confirm: {
        message: "New User Will be created, are you sure ?",
        title: "Create User"
      }
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: [UserEndpoints.BASE] })
    }
  })

  const { mutate: del } = useMutation({
    mutationFn: (id:string) => withFeedback(() => UserApi.DeleteUser(id), { confirm: { message: "This user will be deleted ! are you sure ?", title: 'Delete user' }, }),
    onSuccess:()=>{qc.invalidateQueries({queryKey:[UserEndpoints.BASE]})}
  })

  return (
    <Page title='Test Page'>
      <Button onClick={() => mutate()}>Create New</Button>
      <div className="grid grid-cols-4 gap-2">

        {
          data?.map(item =>
            <div className='col-span-1'>
              <Card>
                <CardContent>

                  {item.email}
                </CardContent>
                <CardActions >
                  {/* @ts-ignore */}
                  <IconButton onClick={() => del(item.id)} color='error'>
                    <BsTrash></BsTrash>
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          )
        }
      </div>
    </Page >
  )
}
