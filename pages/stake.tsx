import { StakeLayout } from "components/layout/StakeLayout"
import { StakeModule } from "components/stake/StakeModule"
import React, { ReactElement } from "react"

export default function Stake() {
    return <StakeModule />
}


Stake.getLayout = function getLayout(page: ReactElement) {
    return (
        <StakeLayout>
            {page}
        </StakeLayout>
    )
}

