import { StakeLayout } from "components/layout/StakeLayout"
import { UnstakeModule } from "components/stake/UnstakeModule"
import { ReactElement } from "react"

export default function Unstake() {
    return <UnstakeModule />
}


Unstake.getLayout = function getLayout(page: ReactElement) {
    return (
        <StakeLayout>
            {page}
        </StakeLayout>
    )
}

