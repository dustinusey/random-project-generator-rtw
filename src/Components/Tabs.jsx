export default function Tabs() {
  return (
    <>
      <div className="mb-1 hidden">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg border-sky-500 hover:border-sky-500 dark:hover:text-gray-300"
              id="all-tab"
              data-tabs-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 border-sky-300 hover:border-sky-500 dark:hover:text-gray-300"
              id="completed-tab"
              data-tabs-target="#completed"
              type="button"
              role="tab"
              aria-controls="completed"
              aria-selected="false"
            >
              Completed
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 border-sky-300 hover:border-sky-500 dark:hover:text-gray-300"
              id="abandoned-tab"
              data-tabs-target="#abandoned"
              type="button"
              role="tab"
              aria-controls="abandoned"
              aria-selected="false"
            >
              Abandoned
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content" className="hidden">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="all"
          role="tabpanel"
          aria-labelledby="all-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="completed"
          role="tabpanel"
          aria-labelledby="completed-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="abandoned"
          role="tabpanel"
          aria-labelledby="abandoned-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </>
  );
}
