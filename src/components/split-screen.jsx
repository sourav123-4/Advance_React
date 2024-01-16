import { styled } from "styled-components"
const Container = styled.div`
    display: flex
`
const Panel = styled.div`
    flex: ${(p)=> p.flex}
`
export const SplitScreen = ({children, LeftWidth = 1, RightWidth = 1}) => {
    const [Left, Right] = children;
    return (
        <Container>
            <Panel flex={LeftWidth}>
                {Left}
            </Panel>
            <Panel flex={RightWidth}>
                {Right}
            </Panel>
        </Container>
    )
}