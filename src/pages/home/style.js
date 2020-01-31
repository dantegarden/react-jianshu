import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
    padding-top: 30px;
`

export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    &:hover {
        background: #dcdcdc;
    }
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height:32px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-img {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
`

export const RecommendWrapper = styled.div`
    width: 280px;
    margin 0 0 30px 0;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${props => props.imgUrl});
    background-size: contain;
`

export const InfoItem = styled.a`
    display: block;
    margin 10px 0 30px 0;
    width: 280px;
    height: 82px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    .info-qrcode {
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
    .info {
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        .title {
            font-size: 15px;
            color: #333;
        }
        .desc {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }
`

export const WriterWrapper = styled.div`
    width: 278px;
    height: 350px;
    overflow: hidden;
`

export const WriterTitle = styled.div`
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const WriterSwitch = styled.span`
    float: right;
    font-size: 14px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const WriterInfoList = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    padding-left: 0;
    box-sizing: border-box;
    font-size: 13px;
`

export const WriterInfoItem = styled.li`
    margin-top: 15px;
    line-height: 20px;
    box-sizing: border-box;
    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        border-color: #42c02e;
        font-weight: 400;
        line-height: normal;
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`

