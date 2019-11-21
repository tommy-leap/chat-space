# ChatSpace DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many : posts
- belongs_to : groups

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|taxt|null: false|
|user_id|integer|null: false foreign_key: true|
### Association
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|mame|text|null: false|
|user_id|integer|null: false foreign_key: true|
### Association
- belongs_to :user

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user