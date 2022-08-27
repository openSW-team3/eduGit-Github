## 기여

다음을 포함하여 원하는 방식으로 **`eduGit-Github`** 에 기여하실 수 있습니다.

- 문서 업데이트
- 맞춤법 및 문법 수정
- git 명령어 추가
- issue 및 PR(Pull Request) 제출
- 홈페이지 내 CSS 내용 수정

**`eduGit-Github`** 에 변경 및 개선이 필요하거나, 질문 사항이 있으실 때에,<br />
언제든 issue 및 PR로써 요청해 주시면 신속히 검토 후 답변드리도록 하겠습니다.

&nbsp;
## 시작하기

프로젝트 폴더 내 **`src/data`** 경로에서 분류된 git 명령어의 목록을 확인하실 수 있습니다.

추가적으로, **`assets`** 폴더에서 git 명령어들에 대한 모든 이미지(svg)파일을 찾아보실 수 있습니다.<br />이미지 파일 추가 시 명명 규칙은 아래 사진과 같이 각 컬렉션 파일(`src/data`) 내 데이터 속성명(skills.name)을<br /> 기반으로 작성하는 것이 원칙이며, 띄워쓰기 대신 -(대쉬 문자)로 이미지 파일명에 공백이 포함되지 않도록 하여야 합니다.

> (예시 - "git fetch" 유닛 추가 시 )
> 
![스크린샷 2022-08-27 오전 10 38 58](https://user-images.githubusercontent.com/56868605/187009478-20a7cf61-f3de-4b16-b470-a88cad8ca15a.png)
![스크린샷 2022-08-27 오전 10 39 41](https://user-images.githubusercontent.com/56868605/187009479-ad0d468c-5b53-4c89-b611-6f0de23de764.png)

&nbsp;

※ **`eduGit-Github`에 issue, commit 및 PR 제출 시 다음의 규칙을 지켜주셔야 합니다!**
### issue 발행 규칙

1. 발행하고자 하는 issue의 타입에 맞는 issue 템플릿 선택
> (타입 종류)
> - `BUG` - 버그 발생
> - `FEAT` - 기능 추가
> - `FIX` - 기능 수정
> - `HELP` - 도움 요청
> - `REFACTOR` , 코드 구조 재조정
2. 템플릿에 의해 추가된 issue 키워드 제목에 이어서 한 칸의<br />
공백 추가 후 issue 사항에 맞는 제목을 작성(명사형으로 마칠 것)
> (issue명 형식)
> - [대문자 영어 issue명] issue 내용
4. issue 상황에 맞는 항목들을 issue의 내용으로 작성
5. 참고 사항에 issue에 대한 적절한 이미지 혹은 GIF 파일 첨부
6. issue의 `Assignees` 추가 및 내용에 맞는 `Labels` 추가
7. issue 발행

(**예시**) (GIF 파일이 첨부되어 있어 화면에 나타나기까지 시간이 다소 소요될 수 있습니다)

![규칙](https://user-images.githubusercontent.com/56868605/187019763-391c3704-4838-4d7d-841b-7a6f9b9fb22d.gif)

&nbsp;
### commit 메시지와 PR 제목 규칙

1. 문장 끝에 `.` 붙이지 않기
2. 명사형으로 문장을 마칠 것
3. issue 번호를 commit 메시지와 PR 제목 마지막에 작성하기
> (작성 형식)
> - [소문자 영어 issue명]: commit/PR 내용 (#issue 번호)

&nbsp;
### PR 발행 규칙

1. 위 단계의 규칙을 따라서 올바른 제목을 작성
2. 해당 PR이 어떤 issue 글과 관련된 것인지 추가

![스크린샷 2022-08-27 오후 5 04 30](https://user-images.githubusercontent.com/56868605/187021295-d1753869-0717-4d5f-8262-f8dea2aa765a.png)

3. 개요, 작업 사항을 PR의 발행 목적에 맞게 작성
4. 참고 사항에 PR을 요청함으로써 변경된 사항을 한 눈에 확인할 수 있는<br />
이미지 혹은 GIF 파일 첨부
5. `Reviewers` 및 `Assignees` 추가 후 내용에 맞는 `Labels` 추가
6. PR 발행
 
&nbsp;
### 작성 예시

- (Issue 제목) [FIX] ~~~~~

![스크린샷 2022-08-27 오후 4 43 24](https://user-images.githubusercontent.com/56868605/187020525-1a2fdd2f-c9eb-492b-a25e-de2bfc58e4d6.png)

- - -

- (Commit 메시지) [fix]: ~~~~~ (#n)

![스크린샷 2022-08-27 오후 4 41 33](https://user-images.githubusercontent.com/56868605/187020534-2575f8c7-bd33-472e-83d1-db4b2b592566.png)

- - -

- (PR 제목) [fix]: ~~~~~~ (#n)

![스크린샷 2022-08-27 오후 4 41 09](https://user-images.githubusercontent.com/56868605/187020537-36011c80-3136-40d4-a26f-d1a0a700890b.png)
