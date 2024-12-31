
React JS 기본강의 (코딩앙마)
 https://www.youtube.com/watch?v=05uFo_-SGXU&list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-
 
0. 개발환경
  - nodejs : nodejs.org/ko  22.12.0 LTS
  - code.visualstudi
  - https://github.com/coding-angma/voca
  
  - nodejs 설치확인
		npm --version
		npx --version
  - react 설치 :: npx create-react-app {project Name ----xxxx}
  
	  Error 발생. -- @testing-library/react 호환이 해결이 안된 모양입니다.
	  https://rominlamp.tistory.com/36
	  npm install react@18 react-dom@18 @testing-library/jest-dom@5.17.0 @testing-library/react@13.4.0 @testing-library/user-event@13.5.0 web-vitals
  - react router-dom 설치 :: npm install react-router-dom   
  
  
1.  react-router-dom 버전 6 업그레이드가 되면서 Switch를 더이상 지원하지 않음. 
	Switch > Routes 변경
	Router > Route 
	
	  <Routes>
        <Route exact path="/" element={<DayList />}></Route>
        <Route path="/day/:day" element={<Day />}></Route>
        <Route path="*" element = {<EmptyPage />}></Route>
      </Routes>
	
2. Json Server 생성 
	npm install -g json-server
	json-server --watch ./src/db/data.json --port 3001
	
	REST API URI 
		- Create : POST
		- Read : GET
		- Update : PUT
		- Delete : DELETE
		
3. React Router V6에서는 useHistory가 더이상 사용되지 않음. 		
   AS-IS
	import { useHistory } from "react-router-dom";

	function MyComponent() {
	  const history = useHistory();
	  const goToDay = () => {
		history.push('/day'); // '/day' 경로로 이동
	  };
	  return <button onClick={goToDay}>Go to Day</button>;
	}

  TO_BE
  import { useNavigate } from "react-router-dom";
  
  function MyComponent() {
	const navigate = useNavigate();
	const goToDay = () => {
		navigate('/day'); // '/day' 경로로 이동
  };
  
4. TypeScript 설치 
	npm install typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom
	
	변경 js >> tsx 