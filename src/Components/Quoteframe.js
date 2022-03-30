const QuoteFrame = ({text}) => {
    return (
        <div className="QuoteFrame">
            <blockquote>
                <p className="quote">{text.quote}</p>
                <p className="author">{text.author}</p>
            </blockquote>
        </div>
    )
}

export default QuoteFrame;