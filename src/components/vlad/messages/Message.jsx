import React from 'react'
import { CardMedia } from "@material-ui/core"
import ExcelIcon from '../../../redux/uils/icons/iconfinder_excel_272697.png'
import x from './Message.module.css'
export default function Message({docsList}) {
    return (
        <div>
            {(docsList || []).map((excel) => (
                <div className={x.flex} key={excel.id}>
                    <div>
                        <CardMedia className={x.card_size} type="file" image={ExcelIcon} />
                        <button className="card-footer"> Delete </button>
                    </div>
                    <div>
                        <div>
                            {excel.from_whom}
                        </div>
                        <div>
                            {excel.add_time}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

