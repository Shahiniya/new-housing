import React from 'react'
import { Container, Img, Info, InfoWrapper ,Icons,Footer,User} from './style';
import noimg from '../../assets/image/uy1.png';
import nouser from '../../assets/image/agent.png';
// import { Icon } from '../Fil[ter/style';

export const Card = ({info,mr,onClick}) => {
  return (
    <Container mr={mr} onClick={onClick}>
        <Img src={info?.attachments[0]?.imgPath || noimg} />
        
        <InfoWrapper>
        <User>
          <User.Img src={info?.user?.imgPath || nouser} />
        </User>
            <div className='subtitle' style ={{whiteSpace: 'nowrap' , overflow:'hidden' }} >{info?.description}</div>
            <div className='description' >
            {info?.name || 'house'}, {info?.address || 'Address'},{' '}
            {info?.city || 'City'}, {info?.country || 'Country'}
            </div> 
        <Info>
            <Info.Detail>
            <Icons.Bed/>
            <div className='description' >{info?.houseDetails?.bed || 0} Beds</div> 
            </Info.Detail>

            <Info.Detail>
            <Icons.Bath />
            <div className='description' >{info?.houseDetails?.bath || 0} Baths</div> 
            </Info.Detail>

            <Info.Detail>
            <Icons.Garage/>
            <div className='description' >{info?.houseDetails?.garage || 0} Garages</div> 
            </Info.Detail>

            <Info.Detail>
            <Icons.Ruler/>
            <div className='description' >{info?.houseDetails?.area || 0} Sq Ft</div> 
            </Info.Detail>
        </Info>

            </InfoWrapper>
            <Footer>
              <Info.Detail>
                  <div className='deleted description' >{info?.salePrice || 0}$</div>
                  <div className='subtitle' >{info?.price || 0}$</div>

              </Info.Detail>
              <Info.Detail className='endToRight' >
                <div>  
                  <Icons.Resize/>
                  <Icons.Love/>
                </div>
              </Info.Detail>

            </Footer>
    </Container>
  )
}
export default Card;