import React from "react";
import TemplateMessage from "atomic/atoms/TemplateMessage";

const TemplateMessageManager: React.FC<{
    loading?: string,
    error?: string,
    data?: string
}> = ({
    loading,
    error,
    data
}) => (<>
    {loading
        ? (
            <TemplateMessage>
                {loading}
            </TemplateMessage>
        ) : null}
    {(!loading && !error && data)
        ? (
            <TemplateMessage>
                {data}
            </TemplateMessage>
        )
        : null}
    {!loading && error
        ? (
            <TemplateMessage>
                {error}
            </TemplateMessage>
        )
        : null}
</>)

export default TemplateMessageManager;