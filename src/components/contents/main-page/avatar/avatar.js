import { CardMedia, CardContent, Typography, Card, CardActionArea } from '@material-ui/core'
import Human from './../../../../assets/image/human.png'
import Profile from './../../../../assets/image/pic.avif'
import './avatar.css'
const styles = {

  box: {
    height: 500,
    width: 500,
    borderRadius: 12,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },

}

const Avatar = () => {
  return (
    <div className="avatar">
      <Card style={styles.box}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height='420'
            image={Human}
            title="Contemplative Reptile"
          />
          <CardContent style={styles.content}>

            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className='avatar-image'
              image={Profile}
              title="Contemplative Reptile"
            />
         
          </CardContent>
        </CardActionArea>

      </Card>
    </div>
  )
}
export default Avatar;