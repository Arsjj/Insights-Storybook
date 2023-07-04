import { Button } from "antd"
import SiMenu from "../../components/SiMenu"
import Icon from "../../svg"
import { css } from "@emotion/react"


const styles = css`
  display: flex;
  /* width: 500px; */
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  font-size: 14px;
`

function Navbar() {
  const items = [
    {
      label: 'My Profile',
      key: 'profilr',
    },
    {
      label: 'Notification',
      key: 'notification',
    },
    {
      label: 'Billing',
      key: 'billing',
      icon: <Icon name="LockCircle" />,
      disabled: true,
  
    },
  ]

  return (
    <div css={styles}><SiMenu mode="horizontalGray" items={items}/> <Button type="link" style={{color: "red"}}>Delete Account</Button> </div>
  )
}

export default Navbar