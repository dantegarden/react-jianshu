import styled from 'styled-components'

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100px;
`

export const DetailHeader = styled.div`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    font-weight: bold;
    color: #333;
`

export const DetailContent = styled.div`
    color: #2f2f2f;
    img {
        max-width: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
        border: 0;
    }
    h3 {
        font-size: 22px;
        font-weight: bold;
    }
    p {
        margin: 25px 0;
        font-size: 16px;
        line-height: 30px;
    }
    b {
        font-weight: bold;
    }
`