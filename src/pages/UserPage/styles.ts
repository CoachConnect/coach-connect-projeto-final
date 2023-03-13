import styled from "styled-components";

export const StyledUserPage = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        background-color: var(--colorPrimary);
        padding: 0.5rem 2rem;
        color: var(--colorGrey100);
        border-radius: 5px;
    }
    
    .div-green{
        background-color: var(--colorPrimary);
        width: 100%;
        height: 120px;
    }

    .div-img{
        width: 110px;
        height: 110px;
        border: 4px solid white;
        border-radius:100%;
        position: fixed;
        top:120px;
    }

   .div-user{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
    }

   .div-user-info{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }

    ul{
        margin-top: 5rem;
        display: flex;
        flex-wrap:wrap;
        gap: 5rem;
    }

    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 2rem;
        cursor: pointer;
    }

    .div-circle{
        width: 50px;
        height: 50px;
        display: flex;
        border-radius: 100%;
        align-items: center;
        justify-content: center;
        background-color: var(--colorPrimary);
        color: white;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }


    @media(max-width: 769px){

        ul{
            margin-top: 1rem;
            flex-wrap: unset;
            overflow-x: auto;
            gap: 4rem;
        }

        .div-circle{
            width: 30px;
            height: 30px;
        }
    }

`
    export const StyledTrainingModal = styled.div`
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100vh;

        position: absolute;
        top: 0;
        left: 0;
        
        display: flex;
        justify-content: center;
        align-items: center;

        div{
            background-color: var(--colorGrey100);
            padding: 2rem;
        }

        span{
            color: var(--colorPrimary);
        }

    `