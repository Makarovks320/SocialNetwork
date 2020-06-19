import React, {useState, useEffect} from 'react';
import {Pagination} from 'react-bootstrap'
import s from './Pagination.module.css'

const CustomizedPagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onPrevClick = () => setPortionNumber(--portionNumber)
    const onNextClick = () => setPortionNumber(++portionNumber)

    const isLeftEllipsis = pagesCount > portionSize + 4 ?
        currentPage > Math.ceil(portionSize / 2 + 2 ) :
        false;
    const isRightEllipsis = pagesCount > portionSize + 4 ?
        currentPage <= pagesCount - (portionSize / 2) - 2 :
        false;

    let startPageNumber = isLeftEllipsis ? Math.ceil(currentPage - portionSize / 2 ) : 2;
    let endPageNumber = isRightEllipsis ?  Math.floor(startPageNumber + portionSize - 1) : pagesCount - 1;
    if (!isLeftEllipsis) {endPageNumber++};
    if (!isRightEllipsis && isLeftEllipsis) {startPageNumber = pagesCount - portionSize - 1};

        useEffect(() => {
        setPortionNumber(portionNumber)
    }, [portionNumber])
    return (
        <Pagination className={s.pagination}>

            <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChanged(--currentPage)}/>
            <Pagination.Item className={currentPage === 1 ? s.selectedPage : ''}
                             onClick={() => onPageChanged(1)}>{1}</Pagination.Item>
            {isLeftEllipsis && <Pagination.Ellipsis/>}
            {pages
                .filter(p => p > 1 && p >= startPageNumber && p <= endPageNumber && p < pagesCount)
                .map((p) => {
                    return <Pagination.Item className={currentPage === p ? s.selectedPage : ''} key={p}
                                            onClick={() => onPageChanged(p)}>{p} </Pagination.Item>
                })
            }
            {isRightEllipsis && <Pagination.Ellipsis/>}
            { pagesCount > 1 &&
                <Pagination.Item className={currentPage === pagesCount ? s.selectedPage : ''}
                             onClick={() => onPageChanged(pagesCount)}>{pagesCount}</Pagination.Item>}
            <Pagination.Next disabled={currentPage === pagesCount} onClick={() => onPageChanged(++currentPage)}/>
        </Pagination>)
}

export default CustomizedPagination;