import { useState } from "react";

function King() {
  const [open, setOpen] = useState(false);

  return (
    <div className="king-container" style={{ pointerEvents: "none" }}>
      {open ? (
        <div className="bubble">
          <span>Psst! scroll down to find more doodles</span>
        </div>
      ) : null}
      <svg
        // width="100"
        // height="120"
        viewBox="0 0 100 120"
        fill="none"
        style={{ pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg">
        <g
          clipPath="url(#clip0_1_2)"
          onClick={() => setOpen(!open)}
          style={{ pointerEvents: "auto" }}>
          <rect width="100" height="120" fill="none" />
          <path
            d="M99.5 119.5C99.5 142.206 93.9212 162.738 84.9277 177.577C75.9287 192.426 63.565 201.5 50 201.5C36.435 201.5 24.0713 192.426 15.0723 177.577C6.07881 162.738 0.5 142.206 0.5 119.5C0.5 96.7942 6.07881 76.262 15.0723 61.4228C24.0713 46.5745 36.435 37.5 50 37.5C63.565 37.5 75.9287 46.5745 84.9277 61.4228C93.9212 76.262 99.5 96.7942 99.5 119.5Z"
            fill="#F0BF75"
            stroke="black"
          />
          <path
            d="M87 70.5C84.2 76.9 88.5 77.8333 91.5 77L90.5 89C81.1667 92.6667 56.8 101.5 34 107.5C11.2 113.5 7.16667 89.6667 8 77C9.2 77.4 10.1667 77.5 10.5 77.5C12.3333 78 15.5 78.5 13.5 76.5C11.5 74.5 13.3333 73.6667 14.5 73.5C14 74 13.6 75 16 75C18.4 75 18 74 17.5 73.5C22.3 73.9 20.1667 75.3333 18.5 76C17 76.6667 15 78.4 19 80C24 82 22 78 22.5 73.5C22.9 69.9 27 72 29 73.5C24.2 71.1 25.6667 73.8333 27 75.5C28.8333 77.6667 31.4 81.4 27 79C22.6 76.6 25.1667 81.6667 27 84.5C30.6667 86.5 37 89.3 33 84.5C29 79.7 34 78.1667 37 78C35.8333 78.8333 34.4 80.5 38 80.5C41.6 80.5 41.5 78.8333 41 78C45.4 81.6 42.8333 81.8333 41 81.5C39 82 35.6 83.5 38 85.5C40.4 87.5 45.6667 87.6667 48 87.5C50.5 87.5 54 86.6 48 83C42 79.4 51.8333 78.8333 57.5 79C52 82 56 86.5 59.5 87.5C63 88.5 75.5 86 70 84.5C65.6 83.3 68.1667 79.6667 70 78C74.8 81.2 76.3333 77.3333 76.5 75C79.5 75 80 78 76.5 81.5C73 85 78 84.5 83 76C87 69.2 82.6667 67.5 80 67.5C83.5 65.8333 89.8 64.1 87 70.5Z"
            fill="#9896F3"
            stroke="#040933"
          />
          <circle cx="33.5" cy="54.5" r="2.5" fill="#040933" />
          <circle cx="52.5" cy="54.5" r="2.5" fill="#040933" />
          <rect x="36" y="64" width="12" height="1" fill="#040933" />
          <rect x="27" y="50" width="12" height="1" fill="#040933" />
          <rect x="46" y="48" width="12" height="1" fill="#040933" />
          <circle cx="41.5" cy="59.5" r="2" fill="#F0BF75" stroke="#040933" />
          <path d="M41 59.5L44.75 56.4689V62.5311L41 59.5Z" fill="#F0BF75" />
          <circle
            cx="73.5036"
            cy="55.5046"
            r="2"
            transform="rotate(180 73.5036 55.5046)"
            fill="#F0BF75"
            stroke="#040933"
          />
          <path
            d="M74.0036 55.5051L70.2505 58.5324L70.2567 52.4702L74.0036 55.5051Z"
            fill="#F0BF75"
          />
          <mask id="path-12-inside-1_1_2" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M92.3476 76C83.4985 85.8424 67.8404 92.383 50 92.383C32.1596 92.383 16.5015 85.8424 7.65235 76C2.80437 88.7101 0 103.756 0 119.883C0 165.446 22.3858 202.383 50 202.383C77.6142 202.383 100 165.446 100 119.883C100 103.756 97.1956 88.7101 92.3476 76Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92.3476 76C83.4985 85.8424 67.8404 92.383 50 92.383C32.1596 92.383 16.5015 85.8424 7.65235 76C2.80437 88.7101 0 103.756 0 119.883C0 165.446 22.3858 202.383 50 202.383C77.6142 202.383 100 165.446 100 119.883C100 103.756 97.1956 88.7101 92.3476 76Z"
            fill="#BE26CB"
          />
          <path
            d="M92.3476 76L93.282 75.6436L92.6986 74.114L91.604 75.3314L92.3476 76ZM7.65235 76L8.39599 75.3314L7.30145 74.114L6.71801 75.6436L7.65235 76ZM91.604 75.3314C82.9843 84.9186 67.6223 91.383 50 91.383V93.383C68.0585 93.383 84.0126 86.7663 93.0913 76.6686L91.604 75.3314ZM50 91.383C32.3777 91.383 17.0157 84.9186 8.39599 75.3314L6.90872 76.6686C15.9874 86.7663 31.9415 93.383 50 93.383V91.383ZM1 119.883C1 103.869 3.78524 88.9445 8.58669 76.3564L6.71801 75.6436C1.8235 88.4757 -1 103.643 -1 119.883H1ZM50 201.383C36.6772 201.383 24.4497 192.468 15.4999 177.701C6.56119 162.952 1 142.513 1 119.883H-1C-1 142.817 4.63169 163.627 13.7895 178.738C22.9361 193.83 35.7086 203.383 50 203.383V201.383ZM99 119.883C99 142.513 93.4388 162.952 84.5001 177.701C75.5503 192.468 63.3228 201.383 50 201.383V203.383C64.2914 203.383 77.0639 193.83 86.2105 178.738C95.3683 163.627 101 142.817 101 119.883H99ZM91.4133 76.3564C96.2148 88.9445 99 103.869 99 119.883H101C101 103.643 98.1765 88.4757 93.282 75.6436L91.4133 76.3564Z"
            fill="#040933"
            mask="url(#path-12-inside-1_1_2)"
          />
          <mask id="path-14-inside-2_1_2" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M94.0932 80.9497C85.6654 89.9078 69.0809 96 50 96C30.9191 96 14.3346 89.9078 5.90679 80.9497C6.45469 79.2639 7.03706 77.6131 7.65235 76C16.5015 85.8424 32.1596 92.383 50 92.383C67.8404 92.383 83.4985 85.8424 92.3477 76C92.9629 77.6131 93.5453 79.2639 94.0932 80.9497Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.0932 80.9497C85.6654 89.9078 69.0809 96 50 96C30.9191 96 14.3346 89.9078 5.90679 80.9497C6.45469 79.2639 7.03706 77.6131 7.65235 76C16.5015 85.8424 32.1596 92.383 50 92.383C67.8404 92.383 83.4985 85.8424 92.3477 76C92.9629 77.6131 93.5453 79.2639 94.0932 80.9497Z"
            fill="#84198D"
          />
          <path
            d="M94.0932 80.9497L94.8215 81.6349L95.2272 81.2037L95.0442 80.6406L94.0932 80.9497ZM5.90679 80.9497L4.95576 80.6406L4.77276 81.2037L5.17846 81.6349L5.90679 80.9497ZM7.65235 76L8.39599 75.3314L7.30145 74.114L6.71801 75.6436L7.65235 76ZM92.3477 76L93.282 75.6436L92.6986 74.114L91.604 75.3314L92.3477 76ZM93.3649 80.2645C85.1922 88.9513 68.9194 95 50 95V97C69.2424 97 86.1386 90.8642 94.8215 81.6349L93.3649 80.2645ZM50 95C31.0806 95 14.8078 88.9513 6.63513 80.2645L5.17846 81.6349C13.8614 90.8642 30.7576 97 50 97V95ZM6.71801 75.6436C6.09665 77.2727 5.50873 78.9392 4.95576 80.6406L6.85783 81.2588C7.40066 79.5886 7.97748 77.9536 8.58669 76.3564L6.71801 75.6436ZM50 91.383C32.3777 91.383 17.0157 84.9186 8.39599 75.3314L6.90872 76.6686C15.9874 86.7663 31.9415 93.383 50 93.383V91.383ZM91.604 75.3314C82.9844 84.9186 67.6223 91.383 50 91.383V93.383C68.0585 93.383 84.0126 86.7663 93.0913 76.6686L91.604 75.3314ZM95.0442 80.6406C94.4913 78.9392 93.9034 77.2727 93.282 75.6436L91.4133 76.3564C92.0225 77.9536 92.5993 79.5886 93.1422 81.2588L95.0442 80.6406Z"
            fill="#040933"
            mask="url(#path-14-inside-2_1_2)"
          />
          <mask id="path-16-inside-3_1_2" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.4142 60.4142C56.6781 61.1504 57.4794 63.1613 59.2088 65.0249C56.8234 65.1766 55 66.0031 55 67C55 67.9847 56.7792 68.8033 59.1219 68.9693C57.4528 70.8059 56.6905 72.7616 57.4142 73.4853C58.1496 74.2207 60.1572 73.4217 62.0192 71.6959C62.1547 74.1279 62.9899 76 64 76C64.998 76 65.8252 74.1727 65.9756 71.7833C67.8104 73.4485 69.7624 74.2081 70.4853 73.4853C71.2081 72.7624 70.4485 70.8104 68.7833 68.9756C71.1727 68.8252 73 67.998 73 67C73 65.9899 71.1279 65.1547 68.6959 65.0192C70.4217 63.1572 71.2207 61.1496 70.4853 60.4142C69.7616 59.6905 67.8059 60.4528 65.9693 62.1219C65.8033 59.7792 64.9847 58 64 58C63.0031 58 62.1766 59.8234 62.0249 62.2088C60.1613 60.4794 58.1504 59.6781 57.4142 60.4142Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.4142 60.4142C56.6781 61.1504 57.4794 63.1613 59.2088 65.0249C56.8234 65.1766 55 66.0031 55 67C55 67.9847 56.7792 68.8033 59.1219 68.9693C57.4528 70.8059 56.6905 72.7616 57.4142 73.4853C58.1496 74.2207 60.1572 73.4217 62.0192 71.6959C62.1547 74.1279 62.9899 76 64 76C64.998 76 65.8252 74.1727 65.9756 71.7833C67.8104 73.4485 69.7624 74.2081 70.4853 73.4853C71.2081 72.7624 70.4485 70.8104 68.7833 68.9756C71.1727 68.8252 73 67.998 73 67C73 65.9899 71.1279 65.1547 68.6959 65.0192C70.4217 63.1572 71.2207 61.1496 70.4853 60.4142C69.7616 59.6905 67.8059 60.4528 65.9693 62.1219C65.8033 59.7792 64.9847 58 64 58C63.0031 58 62.1766 59.8234 62.0249 62.2088C60.1613 60.4794 58.1504 59.6781 57.4142 60.4142Z"
            fill="#D9D9D9"
          />
          <path
            d="M59.2088 65.0249L59.2723 66.0229L61.3751 65.8892L59.9419 64.3447L59.2088 65.0249ZM57.4142 60.4142L56.7071 59.7071L56.7071 59.7071L57.4142 60.4142ZM59.1219 68.9693L59.862 69.6418L61.2474 68.1174L59.1926 67.9718L59.1219 68.9693ZM57.4142 73.4853L56.7071 74.1924L56.7071 74.1924L57.4142 73.4853ZM62.0192 71.6959L63.0177 71.6403L62.8994 69.5167L61.3395 70.9625L62.0192 71.6959ZM65.9756 71.7833L66.6476 71.0428L65.1082 69.6457L64.9776 71.7205L65.9756 71.7833ZM70.4853 73.4853L71.1924 74.1924L70.4853 73.4853ZM68.7833 68.9756L68.7205 67.9776L66.6457 68.1082L68.0428 69.6476L68.7833 68.9756ZM68.6959 65.0192L67.9625 64.3395L66.5167 65.8994L68.6403 66.0177L68.6959 65.0192ZM65.9693 62.1219L64.9718 62.1926L65.1174 64.2474L66.6418 62.862L65.9693 62.1219ZM62.0249 62.2088L61.3447 62.9419L62.8892 64.3751L63.0229 62.2723L62.0249 62.2088ZM59.9419 64.3447C59.1374 63.4778 58.5851 62.6131 58.318 61.9318C58.1836 61.5891 58.1402 61.3404 58.1409 61.1874C58.1415 61.0401 58.1789 61.0637 58.1213 61.1213L56.7071 59.7071C56.2814 60.1328 56.143 60.6839 56.1409 61.1789C56.1388 61.6682 56.2658 62.1767 56.4559 62.6618C56.8378 63.6358 57.5509 64.7084 58.4758 65.7051L59.9419 64.3447ZM56 67C56 67.0773 55.9604 67.0726 56.0485 66.9795C56.1416 66.8811 56.3244 66.7449 56.6311 66.6025C57.2417 66.3188 58.1643 66.0933 59.2723 66.0229L59.1454 64.0269C57.8679 64.1081 56.686 64.3717 55.7886 64.7885C55.3413 64.9963 54.9192 65.2631 54.5958 65.6049C54.2675 65.9518 54 66.4242 54 67H56ZM59.1926 67.9718C58.105 67.8947 57.204 67.6683 56.6096 67.3875C56.3112 67.2465 56.1347 67.1128 56.0455 67.0173C55.9614 66.9272 56 66.9238 56 67H54C54 67.5685 54.261 68.0368 54.5837 68.3823C54.9014 68.7224 55.3161 68.9883 55.7553 69.1958C56.6361 69.612 57.7961 69.8778 59.0512 69.9668L59.1926 67.9718ZM58.1213 72.7782C58.1778 72.8346 58.1428 72.8587 58.1409 72.7191C58.139 72.5733 58.1781 72.3338 58.305 72.0012C58.5576 71.3394 59.0859 70.4957 59.862 69.6418L58.3819 68.2967C57.4888 69.2794 56.8014 70.3319 56.4365 71.288C56.2547 71.7644 56.1346 72.2644 56.1411 72.7461C56.1477 73.2341 56.2888 73.7741 56.7071 74.1924L58.1213 72.7782ZM61.3395 70.9625C60.4733 71.7652 59.6099 72.3161 58.9297 72.5823C58.5877 72.7162 58.3396 72.7594 58.187 72.7586C58.0401 72.7579 58.0638 72.7206 58.1213 72.7782L56.7071 74.1924C57.1324 74.6176 57.6828 74.7562 58.1773 74.7586C58.6662 74.761 59.1742 74.6344 59.6587 74.4447C60.6317 74.0639 61.7031 73.3524 62.699 72.4294L61.3395 70.9625ZM64 75C64.0786 75 64.0724 75.0407 63.9758 74.948C63.8744 74.8507 63.7355 74.6609 63.5915 74.3451C63.305 73.7167 63.0806 72.7705 63.0177 71.6403L61.0208 71.7515C61.0933 73.0534 61.3543 74.2592 61.7717 75.1748C61.9798 75.6311 62.2475 76.0613 62.591 76.391C62.9393 76.7253 63.4164 77 64 77V75ZM64.9776 71.7205C64.9077 72.8304 64.6823 73.7549 64.3984 74.367C64.2559 74.6744 64.1194 74.8578 64.0208 74.9512C63.9274 75.0397 63.9226 75 64 75V77C64.5764 77 65.0492 76.7319 65.3963 76.4031C65.7382 76.0792 66.0051 75.6564 66.2128 75.2084C66.6297 74.3095 66.8931 73.1256 66.9736 71.8462L64.9776 71.7205ZM69.7782 72.7782C69.8345 72.7218 69.8587 72.7566 69.7196 72.7586C69.5742 72.7606 69.3354 72.7218 69.0034 72.5953C68.3429 72.3437 67.5006 71.817 66.6476 71.0428L65.3035 72.5239C66.2853 73.4149 67.3364 74.1005 68.2914 74.4643C68.7671 74.6455 69.2666 74.7652 69.7478 74.7584C70.2354 74.7515 70.7746 74.6102 71.1924 74.1924L69.7782 72.7782ZM68.0428 69.6476C68.817 70.5006 69.3437 71.3429 69.5953 72.0034C69.7218 72.3354 69.7606 72.5742 69.7586 72.7196C69.7566 72.8587 69.7218 72.8346 69.7782 72.7782L71.1924 74.1924C71.6102 73.7746 71.7515 73.2354 71.7584 72.7478C71.7652 72.2666 71.6455 71.7671 71.4643 71.2914C71.1005 70.3364 70.4149 69.2853 69.5238 68.3035L68.0428 69.6476ZM72 67C72 66.9226 72.0397 66.9274 71.9512 67.0208C71.8578 67.1194 71.6744 67.2559 71.367 67.3984C70.7549 67.6823 69.8304 67.9077 68.7205 67.9776L68.8462 69.9736C70.1256 69.8931 71.3095 69.6297 72.2084 69.2128C72.6564 69.0051 73.0792 68.7382 73.4031 68.3963C73.7319 68.0492 74 67.5764 74 67H72ZM68.6403 66.0177C69.7705 66.0806 70.7167 66.305 71.3451 66.5915C71.6609 66.7355 71.8507 66.8744 71.948 66.9758C72.0407 67.0724 72 67.0786 72 67H74C74 66.4164 73.7253 65.9393 73.391 65.591C73.0613 65.2475 72.6311 64.9798 72.1748 64.7717C71.2592 64.3543 70.0534 64.0933 68.7515 64.0208L68.6403 66.0177ZM69.7782 61.1213C69.7206 61.0638 69.7579 61.0401 69.7586 61.187C69.7594 61.3396 69.7162 61.5877 69.5823 61.9297C69.3161 62.6099 68.7652 63.4733 67.9625 64.3395L69.4294 65.699C70.3524 64.7031 71.0639 63.6317 71.4447 62.6587C71.6344 62.1742 71.761 61.6662 71.7586 61.1773C71.7562 60.6828 71.6176 60.1324 71.1924 59.7071L69.7782 61.1213ZM66.6418 62.862C67.4957 62.0859 68.3394 61.5576 69.0012 61.305C69.3338 61.1781 69.5733 61.139 69.7191 61.1409C69.8587 61.1428 69.8346 61.1778 69.7782 61.1213L71.1924 59.7071C70.7741 59.2888 70.2341 59.1477 69.7461 59.1411C69.2644 59.1346 68.7644 59.2547 68.288 59.4365C67.3319 59.8014 66.2794 60.4888 65.2967 61.3819L66.6418 62.862ZM64 59C63.9238 59 63.9272 58.9614 64.0173 59.0455C64.1128 59.1347 64.2465 59.3112 64.3875 59.6096C64.6683 60.204 64.8947 61.105 64.9718 62.1926L66.9668 62.0512C66.8778 60.7961 66.612 59.6361 66.1958 58.7553C65.9883 58.3161 65.7224 57.9014 65.3823 57.5837C65.0368 57.261 64.5685 57 64 57V59ZM63.0229 62.2723C63.0933 61.1643 63.3188 60.2417 63.6025 59.6311C63.7449 59.3244 63.8811 59.1416 63.9795 59.0485C64.0726 58.9604 64.0773 59 64 59V57C63.4242 57 62.9518 57.2675 62.6049 57.5958C62.2631 57.9192 61.9963 58.3413 61.7885 58.7886C61.3717 59.686 61.1081 60.8679 61.0269 62.1454L63.0229 62.2723ZM58.1213 61.1213C58.0637 61.1789 58.0401 61.1415 58.1874 61.1409C58.3404 61.1402 58.5891 61.1836 58.9317 61.318C59.6131 61.5851 60.4778 62.1374 61.3447 62.9419L62.7051 61.4758C61.7084 60.5509 60.6358 59.8378 59.6618 59.4559C59.1767 59.2658 58.6682 59.1388 58.1789 59.1409C57.6839 59.143 57.1328 59.2814 56.7071 59.7071L58.1213 61.1213Z"
            fill="black"
            mask="url(#path-16-inside-3_1_2)"
          />
          <circle cx="64" cy="67" r="3.5" fill="#F0FF48" stroke="black" />
          <circle cx="39.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="69.5" cy="49.5" r="0.5" fill="#040933" />
          <circle cx="71.5" cy="49.5" r="0.5" fill="#040933" />
          <circle cx="73.5" cy="49.5" r="0.5" fill="#040933" />
          <circle cx="71.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="69.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="67.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="65.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="63.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="61.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="75.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="77.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="77.5" cy="53.5" r="0.5" fill="#040933" />
          <circle cx="73.5" cy="51.5" r="0.5" fill="#040933" />
          <circle cx="75.5" cy="49.5" r="0.5" fill="#040933" />
          <circle cx="67.5" cy="49.5" r="0.5" fill="#040933" />
          <circle cx="65.5" cy="49.5" r="0.5" fill="#040933" />
          <circle cx="63.5" cy="49.5" r="0.5" fill="#040933" />
          <circle cx="61.5" cy="49.5" r="0.5" fill="#040933" />
          <circle cx="73.5" cy="47.5" r="0.5" fill="#040933" />
          <circle cx="71.5" cy="47.5" r="0.5" fill="#040933" />
          <circle cx="69.5" cy="47.5" r="0.5" fill="#040933" />
          <circle cx="67.5" cy="47.5" r="0.5" fill="#040933" />
          <circle cx="65.5" cy="47.5" r="0.5" fill="#040933" />
          <circle cx="63.5" cy="47.5" r="0.5" fill="#040933" />
          <circle cx="61.5" cy="47.5" r="0.5" fill="#040933" />
          <circle cx="69.5" cy="45.5" r="0.5" fill="#040933" />
          <circle cx="67.5" cy="45.5" r="0.5" fill="#040933" />
          <circle cx="65.5" cy="45.5" r="0.5" fill="#040933" />
          <circle cx="63.5" cy="45.5" r="0.5" fill="#040933" />
          <circle cx="61.5" cy="45.5" r="0.5" fill="#040933" />
          <circle cx="59.5" cy="45.5" r="0.5" fill="#040933" />
          <circle cx="67.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="65.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="63.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="61.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="59.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="57.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="55.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="53.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="51.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="49.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="35.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="37.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="39.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="41.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="43.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="45.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="47.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="49.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="51.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="53.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="55.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="57.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="59.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="61.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="63.5" cy="41.5" r="0.5" fill="#040933" />
          <circle cx="47.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="45.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="43.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="41.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="31.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="33.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="35.5" cy="43.5" r="0.5" fill="#040933" />
          <circle cx="37.5" cy="43.5" r="0.5" fill="#040933" />
          <mask id="path-84-inside-4_1_2" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38 4L42 23.8608L46 4L50 23.8608L54 4L58 23.8608L62 4L65 18.8956V24V25.5V40H35V25.5V24V18.8956L38 4Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38 4L42 23.8608L46 4L50 23.8608L54 4L58 23.8608L62 4L65 18.8956V24V25.5V40H35V25.5V24V18.8956L38 4Z"
            fill="#FFE500"
          />
          <path
            d="M42 23.8608L41.0197 24.0583L42.9803 24.0583L42 23.8608ZM38 4L38.9803 3.80256L37.0197 3.80256L38 4ZM46 4L46.9803 3.80256L45.0197 3.80256L46 4ZM50 23.8608L49.0197 24.0583H50.9803L50 23.8608ZM54 4L54.9803 3.80256L53.0197 3.80256L54 4ZM58 23.8608L57.0197 24.0583H58.9803L58 23.8608ZM62 4L62.9803 3.80256L61.0197 3.80256L62 4ZM65 18.8956H66V18.7959L65.9803 18.6982L65 18.8956ZM65 40V41H66V40H65ZM35 40H34V41H35V40ZM35 18.8956L34.0197 18.6982L34 18.7959V18.8956H35ZM42.9803 23.6634L38.9803 3.80256L37.0197 4.19744L41.0197 24.0583L42.9803 23.6634ZM45.0197 3.80256L41.0197 23.6634L42.9803 24.0583L46.9803 4.19744L45.0197 3.80256ZM50.9803 23.6634L46.9803 3.80256L45.0197 4.19744L49.0197 24.0583L50.9803 23.6634ZM53.0197 3.80256L49.0197 23.6634L50.9803 24.0583L54.9803 4.19744L53.0197 3.80256ZM58.9803 23.6634L54.9803 3.80256L53.0197 4.19744L57.0197 24.0583L58.9803 23.6634ZM61.0197 3.80256L57.0197 23.6634L58.9803 24.0583L62.9803 4.19744L61.0197 3.80256ZM65.9803 18.6982L62.9803 3.80256L61.0197 4.19744L64.0197 19.0931L65.9803 18.6982ZM66 24V18.8956H64V24H66ZM66 25.5V24H64V25.5H66ZM66 40V25.5H64V40H66ZM35 41H65V39H35V41ZM34 25.5V40H36V25.5H34ZM34 24V25.5H36V24H34ZM34 18.8956V24H36V18.8956H34ZM37.0197 3.80256L34.0197 18.6982L35.9803 19.0931L38.9803 4.19744L37.0197 3.80256Z"
            fill="black"
            mask="url(#path-84-inside-4_1_2)"
          />
          <circle
            cx="17.5757"
            cy="100.744"
            r="2.5"
            transform="rotate(-49.8192 17.5757 100.744)"
            fill="#F0BF75"
            stroke="black"
          />
          <rect
            x="8.70461"
            y="96.5247"
            width="5"
            height="9"
            transform="rotate(-49.8192 8.70461 96.5247)"
            fill="#BE26CB"
            stroke="black"
          />
          <circle
            cx="78.5865"
            cy="101.035"
            r="2.5"
            transform="rotate(43.5951 78.5865 101.035)"
            fill="#F0BF75"
            stroke="black"
          />
          <rect
            x="83.3268"
            y="92.4307"
            width="5"
            height="9"
            transform="rotate(43.5951 83.3268 92.4307)"
            fill="#BE26CB"
            stroke="black"
          />
          <path
            d="M10.7886 80.1301C10.7177 80.201 10.6803 80.3065 10.6224 80.3889C10.4412 80.6469 10.2744 80.9349 10.1266 81.2144C9.88291 81.6752 9.70935 82.1813 9.50816 82.661C9.48264 82.7219 9.39146 82.9725 9.44005 82.7782"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M14.0988 82.5575C13.5977 83.4594 12.9812 84.341 12.6521 85.3282"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M17.3354 84.7643C17.0251 85.3989 16.6935 86.0211 16.3709 86.6496C16.2178 86.9479 16.0698 87.2498 15.9541 87.565C15.9338 87.6203 15.9132 87.6722 15.9132 87.7312"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M20.572 86.3335C20.5317 86.5953 20.3375 86.861 20.2409 87.1086C20.1114 87.441 20.0184 87.78 19.8718 88.1071C19.7438 88.3927 19.6544 88.7699 19.6157 89.0797"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M23.6369 87.9764C23.6273 88.1642 23.5517 88.3383 23.4952 88.5158C23.3952 88.8302 23.2988 89.1461 23.2201 89.4666C23.1448 89.7732 23.0731 90.0789 22.9749 90.3793C22.9216 90.5423 22.8613 90.7019 22.8278 90.8697"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M26.7754 89.1778C26.7603 89.3285 26.6549 89.4701 26.6038 89.611C26.4937 89.9144 26.448 90.2422 26.3858 90.5577C26.3147 90.9187 26.2605 92.0222 26.2605 91.6543"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M29.7178 90.1586C29.6897 90.5234 29.5376 90.8888 29.4494 91.2416C29.344 91.6634 29.35 92.0813 29.35 92.5125"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M32.9053 91.1639C32.8778 91.5772 32.7159 91.9796 32.6015 92.3735C32.5354 92.6015 32.4394 92.8605 32.4394 93.101"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M35.9212 91.6053C35.9212 91.7894 35.8208 91.9688 35.7741 92.1447C35.7083 92.3925 35.6172 92.632 35.5534 92.8803C35.4432 93.3094 35.4063 93.6881 35.4063 94.1308"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M38.5203 92.2183C38.5203 92.9997 38.487 93.7701 38.4222 94.5476"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M41.8059 92.6596C41.8059 93.0687 41.7199 93.4643 41.6847 93.8692C41.6726 94.0082 41.6711 94.1506 41.6534 94.2888C41.6432 94.3677 41.6098 94.4435 41.6098 94.5231"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M44.4541 93.0274C44.4641 93.1481 44.5237 93.2601 44.5494 93.3775C44.6106 93.6571 44.578 93.969 44.5767 94.2534C44.5755 94.4981 44.5521 94.7416 44.5521 94.9862C44.5521 95.0638 44.552 95.1363 44.5276 95.2096"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M47.6416 93.2971C47.6416 93.639 47.6416 93.9809 47.6416 94.3228C47.6416 94.5997 47.66 94.9154 47.5926 95.1851"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M50.6085 93.0764C50.6085 93.854 50.5594 94.6283 50.5594 95.4058"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M53.3301 93.0764C53.3301 93.5723 53.3301 94.0681 53.3301 94.564C53.3301 94.7678 53.3148 94.9674 53.3792 95.1606"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M55.8557 92.9538C55.8557 93.1339 55.8519 93.3139 55.8843 93.4919C55.9307 93.7473 56.0234 93.992 56.0709 94.2479C56.1101 94.4593 56.1249 94.7553 56.248 94.9399"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M58.6264 92.7577C58.6264 93.0961 58.6858 93.4707 58.7749 93.7957C58.8267 93.985 58.8939 94.1694 58.9438 94.3596C58.9653 94.4418 58.9701 94.5724 59.0432 94.6212"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M61.3971 92.0956C61.3971 92.1582 61.4096 92.2169 61.4216 92.2782C61.4758 92.555 61.4952 92.8214 61.4952 93.1037C61.4952 93.599 61.4567 94.111 61.5687 94.5966"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M64.0207 91.5807C64.0456 91.7424 64.1307 91.9061 64.1801 92.0616C64.2986 92.4348 64.3759 92.8148 64.4239 93.2031C64.4368 93.307 64.4111 93.7498 64.5356 93.812"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M66.4972 91.1394C66.5148 91.2683 66.5897 91.3958 66.6334 91.5167C66.7617 91.872 66.859 92.2368 66.9358 92.6065C66.9836 92.8365 67.0038 93.0788 67.0666 93.3053C67.0863 93.3763 67.113 93.4265 67.1837 93.4442"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M69.3905 90.3793C69.4461 90.6573 69.6261 90.9322 69.7297 91.1952C69.8607 91.5281 69.97 91.8606 70.0389 92.2114C70.0621 92.3295 70.0834 92.4607 70.1506 92.5615"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M72.2103 89.4966C72.2471 89.7178 72.3749 89.9494 72.45 90.1586C72.5862 90.538 72.6517 90.9337 72.7824 91.3137C72.8348 91.4663 72.9213 91.6123 72.9213 91.7769"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M74.8829 88.3687C74.8829 88.6355 74.982 88.8674 75.1049 89.1015C75.2843 89.4431 75.4999 89.7651 75.6811 90.1068C75.7886 90.3095 75.8571 90.4798 75.9005 90.7062C75.9222 90.8196 75.9407 90.9459 76.0353 91.0168"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M77.4329 87.4369C77.4605 87.6301 77.6191 87.7827 77.7517 87.911C78.1397 88.2865 78.5831 88.6158 78.9164 89.0443C79.0494 89.2153 79.1392 89.3899 79.2474 89.5701"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M80.4734 85.9412C80.519 86.1697 80.7187 86.3936 80.8466 86.5787C81.0951 86.9384 81.3493 87.2965 81.5836 87.6658C81.7167 87.8757 81.8829 88.1466 81.9445 88.3932"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M83.6364 84.2984C83.6769 84.5956 83.9975 84.9146 84.1813 85.1321C84.4609 85.4632 84.7462 85.7824 84.9414 86.1728C85.0544 86.3988 85.127 86.637 85.2056 86.873"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M86.7749 82.1162C86.782 82.1659 86.7976 82.1982 86.8267 82.2415C86.9778 82.4662 87.1741 82.6683 87.3566 82.8667C87.7387 83.2823 88.1373 83.685 88.5349 84.0859C88.6854 84.2378 88.8284 84.3689 88.9081 84.5681"
            stroke="#040933"
            strokeLinecap="round"
          />
          <path
            d="M89.5211 79.8604C89.7376 79.928 89.9498 80.1368 90.1205 80.2745C90.5032 80.5834 90.9013 80.8963 91.2525 81.2416C91.3863 81.3733 91.4351 81.5246 91.5058 81.6925C91.5308 81.7519 91.5535 81.8119 91.6053 81.8465"
            stroke="#040933"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="100" height="120" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
export default King;
