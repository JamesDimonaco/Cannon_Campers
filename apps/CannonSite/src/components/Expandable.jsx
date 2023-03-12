import { createContext, Fragment, useContext, useState } from 'react'

function ArrowDownIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m17 14-5 5-5-5M12 18.5V5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function ArrowUpIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m7 10 5-5 5 5M12 5.5V19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ExpandableContext = createContext({
  isExpanded: false,
  setIsExpanded: () => {},
})

export function Expandable({ children }) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <ExpandableContext.Provider
      value={{
        isExpanded,
        expand: () => {
          setIsExpanded(true)
        },
        unExpand: () => {
          setIsExpanded(false)
        }

      }}
    >
      {children({ isExpanded })}
    </ExpandableContext.Provider>
  )
}

Expandable.Button = function Button({ children }) {
  let { isExpanded, expand, unExpand } = useContext(ExpandableContext)

  return (
    <Fragment>
    {!isExpanded && (
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
          onClick={expand}
        >
          {children[0]}
          <ArrowDownIcon className="ml-2 h-6 w-6" />
        </button>
      </div>
    )}
    {isExpanded && (
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
          onClick={unExpand}
        >
          {children[1]}
          <ArrowUpIcon className="ml-2 h-6 w-6" />
        </button>
      </div>
    )}
    </Fragment>
  )
}
