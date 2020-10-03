import React, { Fragment } from 'react';

import Target from './subcomponents/Target';

class Targets extends React.Component {
    render() {
        return (
            <div className="targets" >
                <Target 
                    title={"Juli"}
                    subtitle={"SEE THE EVENTS THIS MOUNTH"}
                />
                <Target 
                    title={"Kensington Gardens"} 
                    subtitle={"JULY 16, 06:00 PM"}
                    description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In inventore consequatur, voluptatibus delectus nesciunt ipsum saepe aliquam, mollitia excepturi obcaecati repellendus quis, tenetur perspiciatis praesentium cumque nostrum! Esse, quisquam ea?"}
                    price_title={"PRICE"}
                    price_desc={"$46"}
                    btn_buy={true}
                />
                <Target 
                    title={"Clapham Common"}
                    subtitle={"JULY 26, 06:00 PM"}
                    description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In inventore consequatur, voluptatibus delectus nesciunt ipsum saepe aliquam, mollitia excepturi obcaecati repellendus quis, tenetur perspiciatis praesentium cumque nostrum! Esse, quisquam ea?"}
                    price_title={"PRICE"}
                    price_desc={"$46"}
                    btn_buy={true}
                />
            </div>
        )
    }
}

export default Targets;