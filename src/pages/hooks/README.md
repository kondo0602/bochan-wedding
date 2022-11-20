# page/hooks

各フックについて理解する用のページ。

## use-reducer.tsx

useState と useReducer の違いを理解するためにコンポーネントを両方の記法で実装して比較する。

- Counter
  - useState で書く場合と useReducer で書く場合のコードの違いを確認するために作成
  - @see: https://ja.reactjs.org/docs/hooks-reference.html#usereducer
- Finish
  - 「useReducer で書くと state が一度しか変更されないことを明示できる」という特性を確認するために作成
  - あまりよくわからなかった...setState が同一ページ内で何度も呼ばれるような場合に誤って呼ばれることを防止しやすいということか？
  - @see: https://zenn.dev/spacemarket/articles/9eb80496fa5fe6
- Contact List
  - 「action,reducer を記載することになるのでロジックの明文化が useState よりもされている」「reducer が state に依存しない純粋関数になるのでロジックの単体テストを書くことができるようになる」というメリットを確認するために作成
  - @see: https://zenn.dev/tis1116/articles/8b04672a0221bb

![localhost_3000_hooks_use-reducer.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/874156/a9d30943-a09b-7f39-980d-61c27aad81ab.png)
