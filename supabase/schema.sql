-- À coller une fois dans Supabase > SQL Editor > New query > Run.
create extension if not exists pgcrypto;
create table if not exists public.articles (id uuid primary key default gen_random_uuid(),slug text unique not null,title text not null,summary text not null default '',author text not null default 'FM QuywiX',published_at date not null default current_date,category text not null default 'Actualité',image_url text not null default '',body jsonb not null default '[]'::jsonb,is_published boolean not null default true,created_at timestamptz not null default now());
create table if not exists public.matches (id uuid primary key default gen_random_uuid(),slug text unique not null,match_date timestamptz not null,home_team text not null,away_team text not null,home_score integer,away_score integer,competition text not null,venue text not null default '',details jsonb not null default '{}'::jsonb,created_at timestamptz not null default now());
create table if not exists public.squads (id uuid primary key default gen_random_uuid(),title text not null,squad_date date not null,competition text not null default '',players jsonb not null default '[]'::jsonb,notes text not null default '',is_current boolean not null default true,created_at timestamptz not null default now());
create table if not exists public.seasons (id uuid primary key default gen_random_uuid(),name text unique not null,start_date date not null,end_date date not null,is_current boolean not null default false,notes text not null default '',created_at timestamptz not null default now());
create table if not exists public.career_entries (id uuid primary key default gen_random_uuid(),club_name text not null,role text not null default 'Entraîneur',country text not null default '',city text not null default '',start_date date not null,end_date date,status text not null default 'En poste',logo_url text not null default '',summary text not null default '',achievements jsonb not null default '[]'::jsonb,created_at timestamptz not null default now());
create table if not exists public.competitions (id uuid primary key default gen_random_uuid(),name text not null,season_id uuid references public.seasons(id) on delete set null,club_name text not null default '',competition_type text not null default 'Championnat',status text not null default 'À venir',position text not null default '',details text not null default '',created_at timestamptz not null default now());
create table if not exists public.hidden_content (id uuid primary key default gen_random_uuid(),content_type text not null,content_key text not null,created_at timestamptz not null default now(),unique(content_type,content_key));
create table if not exists public.site_settings (setting_key text primary key,value jsonb not null default '{}'::jsonb,updated_at timestamptz not null default now());
create table if not exists public.standings (id uuid primary key default gen_random_uuid(),competition_key text not null,team text not null,played integer not null default 0,won integer not null default 0,drawn integer not null default 0,lost integer not null default 0,goals_for integer not null default 0,goals_against integer not null default 0,points integer not null default 0,sort_order integer not null default 0,created_at timestamptz not null default now(),unique(competition_key,team));
create table if not exists public.club_players (id uuid primary key default gen_random_uuid(),name text not null,position text not null default '',age integer, nationality text not null default '',market_value text not null default '',rating text not null default '',progress text not null default '',contract_until text not null default '',season text not null default '2027-2028',club_name text not null default '',created_at timestamptz not null default now());
create table if not exists public.club_matches (id uuid primary key default gen_random_uuid(),match_date date not null,opponent text not null,venue text not null default 'D',score text not null default '',competition text not null default '',outcome text not null default 'N',season text not null default '2027-2028',club_name text not null default '',created_at timestamptz not null default now());
create table if not exists public.transfers (id uuid primary key default gen_random_uuid(),player_name text not null,direction text not null default 'Arrivée',other_club text not null default '',fee text not null default '0 M€',transfer_date date,contract text not null default '',season text not null default '2027-2028',club_name text not null default '',created_at timestamptz not null default now());
alter table public.competitions add column if not exists season_name text not null default '';
alter table public.articles enable row level security; alter table public.matches enable row level security; alter table public.squads enable row level security;
alter table public.seasons enable row level security; alter table public.career_entries enable row level security; alter table public.competitions enable row level security;
alter table public.hidden_content enable row level security;
alter table public.site_settings enable row level security; alter table public.standings enable row level security;
alter table public.club_players enable row level security;
alter table public.club_matches enable row level security; alter table public.transfers enable row level security;
drop policy if exists "Lecture publique articles" on public.articles;
create policy "Lecture publique articles" on public.articles for select using (is_published=true or auth.role()='authenticated');
drop policy if exists "Lecture publique matchs" on public.matches;
create policy "Lecture publique matchs" on public.matches for select using (true);
drop policy if exists "Lecture publique convocations" on public.squads;
create policy "Lecture publique convocations" on public.squads for select using (true);
drop policy if exists "Administration articles" on public.articles;
create policy "Administration articles" on public.articles for all to authenticated using (true) with check (true);
drop policy if exists "Administration matchs" on public.matches;
create policy "Administration matchs" on public.matches for all to authenticated using (true) with check (true);
drop policy if exists "Administration convocations" on public.squads;
create policy "Administration convocations" on public.squads for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique saisons" on public.seasons;
create policy "Lecture publique saisons" on public.seasons for select using (true);
drop policy if exists "Administration saisons" on public.seasons;
create policy "Administration saisons" on public.seasons for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique carriere" on public.career_entries;
create policy "Lecture publique carriere" on public.career_entries for select using (true);
drop policy if exists "Administration carriere" on public.career_entries;
create policy "Administration carriere" on public.career_entries for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique competitions" on public.competitions;
create policy "Lecture publique competitions" on public.competitions for select using (true);
drop policy if exists "Administration competitions" on public.competitions;
create policy "Administration competitions" on public.competitions for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique contenus masques" on public.hidden_content;
create policy "Lecture publique contenus masques" on public.hidden_content for select using (true);
drop policy if exists "Administration contenus masques" on public.hidden_content;
create policy "Administration contenus masques" on public.hidden_content for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique reglages" on public.site_settings;
create policy "Lecture publique reglages" on public.site_settings for select using (true);
drop policy if exists "Administration reglages" on public.site_settings;
create policy "Administration reglages" on public.site_settings for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique classements" on public.standings;
create policy "Lecture publique classements" on public.standings for select using (true);
drop policy if exists "Administration classements" on public.standings;
create policy "Administration classements" on public.standings for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique effectif club" on public.club_players;
create policy "Lecture publique effectif club" on public.club_players for select using (true);
drop policy if exists "Administration effectif club" on public.club_players;
create policy "Administration effectif club" on public.club_players for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique calendrier club" on public.club_matches;
create policy "Lecture publique calendrier club" on public.club_matches for select using (true);
drop policy if exists "Administration calendrier club" on public.club_matches;
create policy "Administration calendrier club" on public.club_matches for all to authenticated using (true) with check (true);
drop policy if exists "Lecture publique transferts" on public.transfers;
create policy "Lecture publique transferts" on public.transfers for select using (true);
drop policy if exists "Administration transferts" on public.transfers;
create policy "Administration transferts" on public.transfers for all to authenticated using (true) with check (true);

-- Données déjà présentes dans le site. Elles sont ajoutées une seule fois afin
-- qu'elles puissent ensuite être modifiées ou supprimées depuis l'administration.
insert into public.seasons(name,start_date,end_date,is_current,notes)
select '2026/2027','2026-07-01','2027-06-30',false,'Première saison à la tête du Kosovo.'
where not exists (select 1 from public.seasons where name='2026/2027');
insert into public.seasons(name,start_date,end_date,is_current,notes)
select '2027/2028','2027-07-01','2028-06-30',true,'Saison de la qualification et de la participation à l’Euro 2028.'
where not exists (select 1 from public.seasons where name='2027/2028');

insert into public.career_entries(club_name,role,country,city,start_date,status,summary,achievements)
select 'Kosovo','Sélectionneur national','Kosovo','Pristina','2026-07-21','En poste','Première mission internationale et qualification historique pour l’Euro 2028.','["Promotion en Ligue B","Qualification à l’Euro 2028"]'::jsonb
where not exists (select 1 from public.career_entries where club_name='Kosovo' and start_date='2026-07-21');

insert into public.competitions(name,season_name,club_name,competition_type,status,position,details)
select 'Ligue des Nations 2026/27','2026/2027','Kosovo','Ligue des Nations','Terminée','1er du groupe · promotion en Ligue B','Kosovo invaincu, 14 points.'
where not exists (select 1 from public.competitions where name='Ligue des Nations 2026/27' and club_name='Kosovo');
insert into public.competitions(name,season_name,club_name,competition_type,status,position,details)
select 'Qualifications Euro 2028','2027/2028','Kosovo','Qualifications','Terminée','1er du groupe J · qualifié','Qualification historique avec 18 points.'
where not exists (select 1 from public.competitions where name='Qualifications Euro 2028' and club_name='Kosovo');
insert into public.competitions(name,season_name,club_name,competition_type,status,position,details)
select 'Euro 2028','2027/2028','Kosovo','Championnat d’Europe','Terminée','Phase de groupes','Première participation du Kosovo à un Championnat d’Europe.'
where not exists (select 1 from public.competitions where name='Euro 2028' and club_name='Kosovo');
insert into storage.buckets(id,name,public) values('site-images','site-images',true) on conflict(id) do update set public=true;
drop policy if exists "Lecture publique images" on storage.objects;
create policy "Lecture publique images" on storage.objects for select using(bucket_id='site-images');
drop policy if exists "Administration images" on storage.objects;
create policy "Administration images" on storage.objects for all to authenticated using(bucket_id='site-images') with check(bucket_id='site-images');
