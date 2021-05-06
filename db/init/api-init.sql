SET CHARSET UTF8;
-- ユーザー情報
CREATE TABLE users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(30) NOT NULL UNIQUE,
  user_name VARCHAR(30) NOT NULL,
  password VARCHAR(20) NOT NULL,
  slack_id VARCHAR(30) DEFAULT NULL,
  PRIMARY KEY (id, user_id)
);

-- テスト用サンプルユーザー
INSERT INTO users (user_id, user_name, password) VALUES
    ('matsumoto01', '松本', 'abcd'),('kasukabe01', '春日部', 'efgh'),
    ('sakaguchi01', '坂口', 'ijkl'), ('kawase01', '川瀬', 'mnop');

-- タスク本体
CREATE TABLE contents (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- 管理用id
    user_id VARCHAR(30) NOT NULL, -- タスクを入力したユーザーのid
    text TEXT NOT NULL, -- タスク名
    task_limit DATETIME DEFAULT NULL, -- タスク完了期限
    done TINYINT(1) DEFAULT 0, -- タスクが完了したか？ 0 => false, 0以外(通常1) => true
    PRIMARY KEY (id)
);

-- テスト用サンプルタスク
INSERT INTO contents (user_id, text) VALUES
    ('matsumoto01', 'データベース作成'), ('kasukabe01', '認証周りの実装'),
    ('sakaguchi01', 'hoge'), ('kawase01', 'hogege');
