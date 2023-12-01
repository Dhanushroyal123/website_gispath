import { useState } from 'react'
import mdata from './menublockdata'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const MenuData = ({ x_id }) => {
  const [data, setData] = useState(mdata.filter((each) => each.id === x_id))
  const { id, b1, b2, b3, blockheight } = data[0]
  return (
    <div className='menublock' style={{ height: blockheight }}>
      <div className='menublockinside'>
        <div className='leftMblock'>
          <div
            style={{
              flex: '0.5',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '20px',
            }}
          >
            <h2
              style={{
                color: '#A20FC2',
                fontFamily: 'Geomanist, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '2px',
              }}
            >
              {b1.name.toUpperCase()}
            </h2>
          </div>
          <div
            style={{
              flex: '1',
              width: '100%',
              paddingLeft: '8px',
            }}
          >
            <h1
              style={{
                padding: '0px 5px 0px 10px',
                color: '#0d016b',
                fontFamily: 'Geomanist, Arial, Helvetica, sans-serif',
                lineHeight: '40px',
                fontWeight: '400',
                fontSize: '32px',
                letterSpacing: '0.8px',
              }}
            >
              {b1.content}
            </h1>
          </div>
          <div
            style={{
              flex: '1',
              width: '100%',
              paddingLeft: '20px',
              color: '#A20FC2',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h2
                  style={{
                    fontWeight: '700',
                    color: '#A20FB7',
                    fontSize: '21px',
                    fontFamily: 'Geomanist, Arial, Helvetica, sans-serif',
                    borderBottom: '3px solid red',
                    display: 'inline-block',
                    paddingBottom: '15px',
                  }}
                >
                  {b1.name_exp}
                </h2>
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ArrowCircleRightOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
        <div className='middleMblock'>
          {b2.map((each) => {
            return (
              <div
                style={{
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #d3d3d3',
                  cursor: 'pointer',
                }}
              >
                {
                  <h3
                    className='block2text'
                    style={{
                      letterSpacing: '2px',
                      fontSize: '18px',
                      fontFamily: 'Geomanist, Arial, Helvetica, sans-serif',
                    }}
                  >
                    {each}
                  </h3>
                }
              </div>
            )
          })}
        </div>
        <div className='rightMblock'>
          {b3.status ? (
            <div>
              <div
                style={{
                  width: '100%',
                  flex: '3',
                  display: 'flex',
                  justifyContent: 'right',
                  marginTop: '30px',
                }}
              >
                <img src={b3.image} alt='' height='180px' width='300px' />
              </div>
              <div
                style={{
                  width: '100%',
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '25px 0px 5px 0px',
                }}
              >
                <h3
                  style={{
                    color: '#A20FC2',
                    fontWeight: '500',
                    letterSpacing: '2px',
                    fontSize: '19.008px',
                    fontFamily: 'Geomanist, Arial, Helvetica, sans-serif',
                    marginLeft: '155px',
                  }}
                >
                  {b3.first_service}
                </h3>
              </div>
              <div style={{ width: '100%', flex: '2' }}>
                <h1
                  style={{
                    padding: '0px 5px 0px 10px',
                    color: '#0d016b',
                    fontFamily: 'Geomanist, Arial, Helvetica, sans-serif',
                    fontWeight: '400',
                    fontSize: '28px',
                    letterSpacing: '0.8px',
                    marginLeft: '145px',
                    lineHeight: '40px',
                  }}
                >
                  {b3.content}
                </h1>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuData
