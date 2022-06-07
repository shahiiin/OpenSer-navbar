import { CardMedia, CardContent, Typography, Card, CardActionArea } from '@material-ui/core'
import Human from './../../../../assets/image/human.png'
import Profile from './../../../../assets/image/pic.avif'

const styles = {
  avatar: {
    height: '100%',
    width: '100%',

  },
  box: {
    height: 500,
    width: 500,
    borderRadius: 12,
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
          <CardContent>

            {/* <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height='20'
              image={Profile}
              title="Contemplative Reptile"
            /> */}

          </CardContent>
        </CardActionArea>

      </Card>
    </div>
  )
}
export default Avatar;